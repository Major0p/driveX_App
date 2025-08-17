import React,{useContext, useState} from "react";
import {API_URLS} from '../../API/URLs';
import {AuthContext} from '../../Common/FilePaths'
import {SetSessionTokenToLocalStorage,SetAccessTokenToLocalStorage} from '../../Common/Utils'
import { useNavigate,Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SignIn() {
  const {setUserId,setUserFirstName} = useContext(AuthContext);
  const navigate = useNavigate();

  const initialForm = {
    userId: "",
    password: "",
  };
  const [form, setForm] = useState(initialForm);

  function handleChange(e) {
    setForm({...form,[e.target.name]: e.target.value});
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      let response = await fetch(API_URLS.LOGIN, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        let result = await response.json();
        if (result.Success) {
          setUserId(result.Data.UserId);
          setUserFirstName(result.Data.Name);
          SetSessionTokenToLocalStorage(result.Token.SessionToken);
          SetAccessTokenToLocalStorage(result.Token.AccessToken);
          //redirect to home page
          navigate('/');
        }
        else
          setForm(initialForm);
      }
      else
        setForm(initialForm);
    }
    catch (ex) {
      console.error(ex.message);
    }
  }

  return (
    <>
    <div className="bg-gray-100 px-4 min-h-screen flex items-center justify-center flex-col">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4 relative">
        <h2 className="text-2xl font-bold text-center mb-4 cursor-default">Sign In</h2>
        <input
          type="text"
          placeholder="User ID"
          name="userId"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="p-3 mb-8 mt-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      <Link to='/signup' className='float-right text-blue-600 hover:text-blue-800 absolute right-3 bottom-2'>
      Sign Up 
      </Link>
      </form>
    </div>
    </>
  );
}
