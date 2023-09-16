import { Link } from "react-router-dom";
import { PostType } from "../../types/PostTypes";
import { cites, stateTypes } from "../../utils/enumsParser";
import { featuresParser } from "../../utils/featuresValidator";

type PostProps = {
  post: PostType
}


function Post({ post }: PostProps) {
  return (
    <div className="rounded-lg lg:w-[400px] w-[500px] mx-auto lg:mx-0 overflow-hidden shadow-lg">
      <Link to={`/explore/${post.id}`}>
        <img className="h-64 object-cover w-full" src={`${import.meta.env.VITE_SERVER}/${post.imagePath}`} alt="" />
        <div className="px-3 pt-5">
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
        </div>
      </Link>
      <div className="flex justify-between items-center px-3 pb-5">
        <div className="flex flex-col">
          <span className="font-bold text-gray-800">{cites[post.city.toString() as keyof typeof cites]}</span>
          <span className="text-sm  text-gray-600">{post.street}</span>
        </div>
        <a href={`mailto: ${post.email}`} className="btn">Email Agent</a>
      </div>
    </div>
  );
}

export default Post;
