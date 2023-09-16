import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PostType, PostsType } from "../../types/PostTypes";
import usePost from "../../hooks/usePost";
import { cites, stateTypes } from "../../utils/enumsParser";
import { featuresParser } from "../../utils/featuresValidator";

type UserPostProps = {
  post: PostType,
  setPosts: React.Dispatch<React.SetStateAction<PostsType>>
}

function UserPost({ post, setPosts }: UserPostProps) {
  const { deletePost, isPending, error } = usePost()

  const handleDelete = async (id: number) => {
    const res = await deletePost(post.id!);
    if (res?.status) {
      setPosts(posts => posts.filter(post => post.id != id))
    }
  }

  return (
    <div className="rounded-lg border-2 w-full flex overflow-hidden shadow-lg flex-col md:flex-row">
      <Link to={`/explore/${post.id}`}>
        <div className="md:w-52 h-52">
          <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_SERVER}/${post.imagePath}`} alt="" />
        </div>
      </Link>
      <div className="md:px-10 px-5 py-5 w-full">
        <Link to={`/explore/${post.id}`}>
          <p className="mb-1 font-bold">{stateTypes[post.stateType.toString() as keyof typeof stateTypes]}</p>
          <h2 className="font-bold text-3xl mb-2">{post.price} JOD</h2>
          <ul className="flex gap-4 items-center mb-6 font-sans">
            {featuresParser(post.features).map(features => (
              <li key={Math.random()}>
                <span className="font-bold text-sm mr-0.5">{features.value}</span>
                <span>{features.key}</span>
              </li>
            ))}
          </ul>
        </Link>
        <div className="flex justify-between md:items-center flex-col md:flex-row">
          <Link to={`/explore/${post.id}`} className="flex flex-col text-sm mb-3 md:mb-0">
            <span className="font-bold text-gray-800">{cites[post.city.toString() as keyof typeof cites]}</span>
            <span className="  text-gray-600">{post.street}</span>
          </Link>
          <div className="flex gap-3 justify-end">
            <Link to={`/edit-post/${post.id}`} className="flex items-center gap-2 font-semibold md:px-5 md:py-2 transition-shadow duration-300 hover:shadow-sm hover:shadow-[#f1354278] bg-green-700 text-white text-sm md:text-base px-2 py-2 whitespace-nowrap"><AiFillEdit /> <span>Edit Post</span></Link>
            <div className="relative">
              <button onClick={() => handleDelete(post.id!)} disabled={isPending} className="flex items-center gap-2 font-semibold md:px-5 md:py-2 transition-shadow duration-300 hover:shadow-sm hover:shadow-[#f1354278] bg-red-900 text-white  text-sm md:text-base px-2 py-2 whitespace-nowrap"><RiDeleteBin2Fill /> <span>Delete Post {isPending ? "..." : ""}</span></button>
              {error && (
                <div className="absolute font-sans -top-10 right-0  whitespace-nowrap bg-red-100 px-3 rounded-md text-red-900">Error: {error}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPost;
