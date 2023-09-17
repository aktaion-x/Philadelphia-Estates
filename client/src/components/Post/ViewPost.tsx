import { useEffect, useState } from 'react'
import { PostType } from '../../types/PostTypes';
import { useNavigate, useParams } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import LoadingSpinner from '../LoadingSpinner';
import { cites, stateTypes } from '../../utils/enumsParser';
import { featuresParser } from '../../utils/featuresValidator';

function ViewPost() {
  const { getPost, isPending, error } = usePost()
  const id = Number(useParams().id);
  const navigate = useNavigate()
  const [post, setPost] = useState<PostType | null>(null)
  useEffect(() => {
    let isSubscribe = true;

    const fetchPost = async (id: number) => {
      const res = await getPost(id);
      if (isSubscribe && res?.status === 200) {
        const data = res?.data;
        setPost(data);
      }
    }

    if (!isNaN(id) && !(id <= 0)) {
      fetchPost(id);
    } else {
      navigate(`/explore`);
    }

    return () => {
      isSubscribe = false;
    }
  }, [id])
  return (
    <div className="page">
      {post && (
        <div className="rounded-t-lg md:rounded-s-lg md:rounded-t-0 mx-auto md:mx-0 overflow-hidden md:flex shadow-md">
          <img className="md:h-[700px] h-96 object-cover w-full md:w-[50%] basis-1/2" src={`${import.meta.env.VITE_SERVER}/${post.imagePath}`} alt="" />
          <div className="p-5 flex justify-between w-full md:w-[50%] basis-1/2">
            <div>
              <div className="mb-5"><span className='text-xl font-semibold block'>State Type:</span><span className='font-semibold mt-1 block mr-0.5' >{stateTypes[post.stateType.toString() as keyof typeof stateTypes]}</span></div>
              <ul className="flex flex-col gap-1 mb-5">
                <span className='text-xl font-semibold'>Features</span>
                {featuresParser(post.features).map(features => (
                  <li key={Math.random()}>
                    <span className="font-bold text-sm mr-0.5">{features.value}</span>
                    <span>{features.key}</span>
                  </li>
                ))}

              </ul>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 text-sm ">
                  <span className='text-xl font-semibold'>Location</span>
                  <div>
                    <span className='font-bold text-sm mr-0.5'>City: </span>
                    <span>{cites[post.city.toString() as keyof typeof cites]}</span>
                  </div>
                  <div>
                    <span className='font-bold text-sm mr-0.5'>Street: </span>
                    <span>{post.street}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 items-center">
              <h2 className="font-bold text-2xl mb-2">Price: {post.price} JOD</h2>
              <div>
                <button className="btn">Email Agent</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isPending &&
        (<div className="mt-20 text-xl font-semibold flex gap-2 mb-3">Loading <LoadingSpinner className="w-5 h-5 inline" /> </div>)}
      {error &&
        (<div className="mt-20 text-lg font-semibold text-red-600">Error: {error}</div>)}
    </div>
  )

}

export default ViewPost;
