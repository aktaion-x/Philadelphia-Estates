import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import usePost from "../../hooks/usePost";
import { cites, stateTypes } from "../../utils/enumsParser";
import { featuresFormatter, featuresValidator } from "../../utils/featuresValidator";

function AddPost() {
  const { createPost, isPending, error } = usePost()
  const navigate = useNavigate();
  const [stateType, setStateType] = useState("")
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")
  const [email, setEmail] = useState("")
  const [features, setFeatures] = useState("")
  const [price, setPrice] = useState<number>(0)
  const [image, setImage] = useState<File | null>(null)

  const [inputError, setInputError] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputError(null)
    const file = e.target.files![0];
    if (!file.type.includes('image')) {
      setInputError("File must be a valid image type")
    } else if (file.size > 2_000_000) {
      setInputError("File size must be less than 2MB")
    }
    setImage(file)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stateType || !city || !street || !email || !features || !price) {
      setInputError("All required fields must be filled!")
      return
    }
    if (price === 0) {
      setInputError("Price should be more than 0")
      return
    }
    if (!featuresValidator(features)) {
      setInputError("Features are not formatted properly!")
      return
    }
    const formattedFeatures = featuresFormatter(features)
    const res = await createPost({ city: Number(city), email, features: formattedFeatures, price, stateType: Number(stateType), street, image })
    if (res?.status === 200) {
      navigate("/profile");
    } else if (error) {
      setInputError(error)
    }
  }

  return (
    <div className="page">
      <h1 className="text-center text-5xl font-bold w-3/4 mx-auto">Welcome. We exist to make entrepreneurship easier.</h1>
      <form onSubmit={handleSubmit} className="w-96 mt-20 mx-auto">
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Type</span>
          <select onChange={(e) => setStateType(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800">
            <option disabled selected className="text-gray-400">Select Estate Type</option>
            {Object.keys(stateTypes).map((typeId) => (
              <option key={typeId} value={typeId}>{stateTypes[typeId as keyof typeof stateTypes]}</option>
            ))}
          </select>
        </label>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Location</span>
          <select onChange={(e) => setCity(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800">
            <option disabled selected className="text-gray-400">Select Location</option>
            {Object.keys(cites).map((cityId) => (
              <option key={cityId} value={cityId}>{cites[cityId as keyof typeof cites]}</option>
            ))}
          </select>
        </label>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Street</span>
          <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="State street" />
        </label>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Contact email" />
        </label>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Features (separated by semicolon " ; ")</span>
          <input type="text" value={features} onChange={(e) => setFeatures(e.target.value)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="e.g. bath=2;room=4" />
          <small className="text-gray-600 mt-2">e.g. (room=4;sqft=3100;bath=2)</small>
        </label>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Price</span>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Offered price" />
        </label>
        <label className="my-6 flex flex-col">
          <span className="text-gray-800 relative w-fit">State Image</span>
          <input type="file" accept="image/*" onChange={handleImageChange} className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Offered price" />
        </label>
        {inputError && (
          <small className="text-red-600 font-sans font-bold">{inputError}</small>
        )}
        {error && (
          <div className="font-semibold text-red-600">Error: {error}</div>
        )}
        <button disabled={isPending} className="w-full mt-10 font-semibold px-6 py-3 bg-brand-700 text-white transition-shadow duration-300 hover:shadow-lg  active">Post State {isPending ? "..." : ""}</button>
      </form>
    </div>
  );
}

export default AddPost;
