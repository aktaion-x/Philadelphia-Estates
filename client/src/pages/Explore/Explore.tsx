import { useState, useEffect } from "react";
import { PostsType } from '../../types/PostTypes'
import Post from "./Post";
import usePost from "../../hooks/usePost";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import FilterPosts from "./FilterPosts";

function Explore() {
  const { getAllPosts, isPending, error } = usePost()
  const [posts, setPosts] = useState<PostsType>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let isSubscribed = true;

    const getPosts = async (stateTypeFilter?: string) => {
      const res = await getAllPosts(stateTypeFilter);
      if (isSubscribed && res?.status === 200) {
        const data = res?.data;
        setPosts(() => [...data])
      }
    }

    if (searchParams.get("type")) {
      getPosts(searchParams.get("type")!)
    } else {
      getPosts()
    }

    return () => {
      isSubscribed = false;
    }
  }, [])

  const handleFilter = async (e: React.FormEvent<HTMLFormElement>, typeFilter: string, cityFilter: string, priceFilter: string) => {
    e.preventDefault();
    const res = await getAllPosts(typeFilter, cityFilter, priceFilter);
    if (res?.status === 200) {
      setSearchParams("")
      const data = res?.data;
      setPosts(() => [...data])
    }
  }

  return (
    <div className="page">
      <div className=" mb-16 mt-10">
        <h1 className="text-4xl font-bold">Explore Real-States</h1>
        <FilterPosts handleFilter={handleFilter} defaultTypeFilter={searchParams.get("type") ? searchParams.get("type")! : ""} />
      </div>
      {posts.length === 0 && !error && !isPending && (
        <div className="text-xl font-semibold flex gap-2 mb-3 items-center justify-center">There is no States to show!</div>
      )}
      {isPending && (
        <div className="text-xl font-semibold flex gap-2 mb-3 items-center justify-center">Loading <LoadingSpinner className="w-5 h-5 inline" /> </div>
      )}
      {error && (
        <div className="text-xl font-semibold text-center text-red-600">Error: {error}</div>
      )}
      <div className="flex gap-10 flex-wrap ">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
