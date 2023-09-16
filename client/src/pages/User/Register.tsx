import { useState } from "react";
import useUser from "../../hooks/useUser";

function Register() {
  const { error, isPending, signupUser } = useUser();
  const [inputError, setInputError] = useState<null | string>(null);
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputError(null)
    if (!fullName || !email || !phone || !password) {
      setInputError("All fields must be filled!");
      return;
    } else if (password.length < 6) {
      setInputError("Password must be more than 6 characters!")
      return;
    }

    await signupUser(fullName, email, phone, password)
    if (error) {
      setInputError(error)
      return;
    }
  }

  return (
    <div className="page">
      <h1 className="text-center text-5xl font-bold w-3/4 mx-auto">Welcome. We exist to make entrepreneurship easier.</h1>
      <form className="w-96 mt-20 mx-auto" onSubmit={handleSubmit}>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Full Name</span>
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="First and last name" />
        </label>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Your email" />
        </label>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Phone</span>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Your phone number" />
        </label>
        <label className="my-6 flex flex-col">
          <span className="required-input text-gray-800 relative w-fit">Password</span>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border px-3 py-2 bg-transparent text-gray-600 text-lg outline-none focus:border-gray-800" placeholder="Your password" />
        </label>
        {inputError && (
          <small className="text-red-600 pb-2 block">{inputError}</small>
        )}
        <span className="text-gray-500 font-sans text-xs">I agree to be contacted by IX about this offer as per the IIX (Privacy Policy).</span>
        <button disabled={isPending} className="w-full mt-10 font-semibold px-6 py-3 bg-brand-700 text-white transition-shadow duration-300 hover:shadow-lg  active">Sign up {isPending ? "..." : ""}</button>
      </form>
    </div>
  );
}

export default Register;
