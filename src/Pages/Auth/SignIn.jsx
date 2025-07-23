import React,{useState} from "react";
import {API_URLS} from '../../API/URLs';

export default function SignIn() {

  const initialForm = {
    userId: "",
    password: "",
  };
  const [form, setForm] = useState(initialForm);

  function handleChange(e) {
    setForm({...form,[e.target.name]: e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await fetch(API_URLS.LOGIN,{
      method:"POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if(response.ok) 
    {
      let data = await response.json();
      if(data.Success)
      {
        console.log(data);
        localStorage.setItem("token", JSON.stringify(data.Token));
        //redirect to home page
      }
      else 
        setForm(initialForm);
    }
    else 
      setForm(initialForm);
  }

  return (
    <div className="bg-gray-100 px-4 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
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
          className="p-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
