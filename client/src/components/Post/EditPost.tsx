import { useState, useEffect } from 'react'
import usePost from "../../hooks/usePost";
import { PostType } from '../../types/PostTypes';
import { useNavigate, useParams } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

function EditPost() {
  const { getPost, updatePost, isPending, error } = usePost()
  const { userData } = useAuthContext()
  const navigate = useNavigate();
  const id = Number(useParams().id);
  const [post, setPost] = useState<PostType>()
  const [stateType, setStateType] = useState("")
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")
  const [email, setEmail] = useState("")
  const [features, setFeatures] = useState("")
  const [price, setPrice] = useState<number>(0)
  const [image, setImage] = useState<File | null>(null)

  const [inputError, setInputError] = useState<string | null>(null)


  useEffect(() => {
    let isSubscribe = true;

    const fetchPost = async (id: number) => {
      const res = await getPost(id);
      if (isSubscribe) {
        const data = res?.data;
        setPost(data);
      }
    }

    if (!isNaN(id) && id > 0) {
      fetchPost(id);
    }

    return () => {
      isSubscribe = false;
    }
  }, [])

  useEffect(() => {
    if (post) {
      setStateType(post.stateType.toString())
      setCity(post.city.toString())
      setStreet(post.street)
      setEmail(post.email)
      setFeatures(post.features)
      setPrice(post.price)
    }
  }, [post])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputError(null)
    setImage(null)
    const file = e.target.files![0];
    if (!file) {
      return
    }
    if (!file.type.includes('image')) {
      setInputError("File must be a valid image type")
    } else if (file.size > 2_000_000) {
      setInputError("File size must be less than 2MB")
    }
    setImage(file)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (price === 0) {
      setInputError("Price should be more than 0")
    }
    if (!stateType || !city || !street || !email || !features || !price) {
      setInputError("All required fields must be filled!")
    }

    const res = await updatePost({ city: Number(city), email, features, price, stateType: Number(stateType), street, image, id: post?.id })
    if (res?.status === 200) {
      navigate("/profile");
    } else if (error) {
      setInputError(error)
    }
  }



  if (post && post.ownerId === userData?.user.id) {
    return (
      <div className="page">
        <h1 className="text-center text-5xl font-bold w-3/4 mx-auto">Welcome. We exist to make entrepreneurship easier.</h1>
        <form onSubmit={handleSubmit} className="w-96 mt-20 mx-auto">
          <label className="my-6 flex flex-col">
            <span className="required-input text-gray-800 relative w-fit">Type</span>
            <select value={stateType} onChange={(e) => setStateType(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800">
              <option disabled selected className="text-gray-400">Select Type</option>
              <option value="0">House</option>
              <option value="1">Land</option>
              <option value="2">Studio</option>
              <option value="3">Town-home</option>
              <option value="4">Farm</option>
            </select>
          </label>
          <label className="my-6 flex flex-col">
            <span className="required-input text-gray-800 relative w-fit">Location</span>
            <select value={city} onChange={(e) => setCity(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800">
              <option disabled selected className="text-gray-400">Select Location</option>
              <option value="0">Abdon</option>
              <option value="1">Al Abdali</option>
              <option value="2">Sweifieh</option>
              <option value="3">Jabal Amman</option>
            </select>
          </label>
          <label className="my-6 flex flex-col">
            <div className="flex justify-between items-center">
              <span className="required-input text-gray-800 relative w-fit">Street</span>
            </div>
            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="State street" />
          </label>
          <label className="my-6 flex flex-col">
            <div className="flex justify-between items-center">
              <span className="required-input text-gray-800 relative w-fit">Email</span>
            </div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Contact email" />
          </label>
          <label className="my-6 flex flex-col">
            <div className="flex justify-between items-center">
              <span className="required-input text-gray-800 relative w-fit">Features (separated by comma)</span>
            </div>
            <input type="text" value={features} onChange={(e) => setFeatures(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="e.g. bath=2,room=4" />
          </label>
          <label className="my-6 flex flex-col">
            <div className="flex justify-between items-center">
              <span className="required-input text-gray-800 relative w-fit">Price</span>
            </div>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Offered price" />
          </label>
          <label className="my-6 flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-gray-800 relative w-fit">State Image</span>
            </div>
            <img className="h-32 object-cover w-full my-3" src={image ? URL.createObjectURL(image) : `${import.meta.env.VITE_SERVER}/${post.imagePath}`} alt="" />
            <input type="file" accept="image/*" onChange={handleImageChange} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Offered price" />
          </label>
          {inputError && (
            <small>{inputError}</small>
          )}
          <button disabled={isPending} className="w-full mt-10 font-semibold px-6 py-3 bg-brand-700 text-white transition-shadow duration-300 hover:shadow-lg  active">Post State {isPending ? "..." : ""}</button>
        </form>
      </div >
    );
  } else if (post && post.ownerId !== userData?.user.id) {
    return (
      <div className='pt-20'>Errror</div>
    )
  }
}

export default EditPost;
