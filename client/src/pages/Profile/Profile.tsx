import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from 'react'
import { PostsType } from "../../types/PostTypes";
import useAuthContext from "../../hooks/useAuthContext";
import usePost from "../../hooks/usePost";
import UserPost from "./UserPost";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

function Profile() {
  const { userData } = useAuthContext();
  const { getUserPosts, error, isPending } = usePost();
  const [posts, setPosts] = useState<PostsType>([])
  console.log(posts.length);

  useEffect(() => {
    let isSubscribed = true;

    const getPosts = async () => {
      const res = await getUserPosts()
      if (isSubscribed && res?.status === 200) {
        const data = res?.data;
        setPosts(() => [...data])
      }
    }

    if (userData) {
      getPosts()
    }

    return () => {
      isSubscribed = false
    }
  },
    [])
  if (userData) {
    return (
      <div className="page">
        <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0 md:items-start md:p-10 w-full md:shadow-sm pb-3 border-b md:border-0">
          <div>
            <h4 className="text-3xl font-bold mb-5">{userData.user.fullName}</h4>
            <div className="mb-2 font-black items-center flex gap-2"><MdEmail /> <span>{userData.user.email}</span></div>
            <div className="mb-2 font-black items-center flex gap-2"><FaSquarePhone /> <span>{userData.user.phone}</span></div>
            <div className="font-semibold">States posted: <span className="font-medium">{posts.length}</span></div>
          </div>
          <Link className="btn w-fit ml-auto" to='/add-post'>
            Add new state
          </Link>
        </div>
        <div className="flex gap-10 flex-col mt-32">
          {posts.length > 0 && posts.map((post) => (
            <UserPost key={Math.random()} setPosts={setPosts} post={post} />
          ))}
          {posts.length === 0 && !error && !isPending && (
            <div className="text-xl ">You don't have states to show! <Link className="hover:text-brand-700 transition-colors underline" to='/add-post'>Add one!</Link></div>
          )}
          {isPending && (
            <div className="text-xl font-semibold flex gap-2 mb-3 items-center justify-center">Loading <LoadingSpinner className="w-5 h-5 inline" /> </div>
          )}
          {error && (
            <div className="text-xl font-semibold text-center text-red-600">Error: {error}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
