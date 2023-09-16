import { Link, useNavigate, useParams } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const path = useParams()["*"]
  return (
    <section className="bg-white">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-brand-700 ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">We can’t find that page</h1>
          <p className="mt-4 text-gray-500 ">Sorry, the page you are looking for <span className="text-red-600">"/{path}"</span> doesn't exist or has been moved.</p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              to={'..'}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>

              <span>Go back</span>
            </Link>

            <Link
              to={'/'}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-brand-700 shrink-0 sm:w-auto hover:bg-brand-900 ">
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;