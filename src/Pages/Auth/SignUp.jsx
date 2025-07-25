import React, { useContext, useState } from "react";
import { API_URLS } from "../../API/URLs";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from '../../Contexts/AuthContextProvider'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SignUp() {
  const {setUserId,setUserFirstName} = useContext(AuthContext);
  const navigate = useNavigate();

  let initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    userId: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(API_URLS.SIGNUP, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      let data = await response.json();
      if (data.Success) {
        console.log(data);
        setUserId(data.userId);
        setUserFirstName(data.name);
        localStorage.setItem("token", JSON.stringify(data.Token));
                //redirect to home page
        //Navigate('./Home');
        navigate('/');
      } else setForm(initialForm);
    } else setForm(initialForm);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4 relative"
        >
          <h2 className="text-2xl font-bold text-center mb-4 cursor-default">Sign Up</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            required
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="userId"
            placeholder="User ID"
            value={form.userId}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="p-3 mb-8 mt-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
                <Link to='/signin' className='float-right text-blue-600 hover:text-blue-800 absolute right-3 bottom-2'>
                Sign In 
                </Link>
        </form>
      </div>
    </>
  );
}


{/* <FaLongArrowAltRight className="inline-block"/> */}