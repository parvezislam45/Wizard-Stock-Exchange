// src/components/Login.js
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/account/login/",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.token;
      console.log(token)
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Invalid Credentials");
    }
  };

  return (
    <div>
      <div className="relative flex h-full w-full">
        <div className="h-screen w-1/2 bg-black">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-slate-300 xl:w-1/2">
            <div>
              <p className="text-2xl">Login</p>
              <p>please login to continue</p>
            </div>
            <div className="my-6">
              <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-300 sm:p-2">
                <img
                  src="https://freesvg.org/img/1534129544.png"
                  className="mr-2 w-6 object-fill"
                />
                Sign in with Google
              </button>
            </div>
            <div>
              <fieldset className="border-t border-solid border-gray-600">
                <legend className="mx-auto px-2 text-center text-sm text-slate-300">
                  Or login via our secure system
                </legend>
              </fieldset>
            </div>
            <div className="mt-10">
              {error && <p>{error}</p>}
              <form onSubmit={handleLogin}>
                <div>
                  <label className="mb-2.5 block font-extrabold text-slate-300">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="mail@user.com"
                  />
                </div>
                <div className="mt-4">
                  <label className="mb-2.5 block font-extrabold text-slate-300">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                  />
                </div>
                <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label className="mx-2 text-sm text-slate-300">Remember me</label>
                  </div>

                  <div>
                    <a href="#" className="text-sm text-slate-300 hover:text-gray-100">
                      Forgot password
                    </a>
                  </div>
                </div>
                <div className="my-10">
                  <button type="submit" className="w-full rounded-full bg-orange-600 p-5 text-slate-100 hover:bg-orange-900 hover:text-slate-300">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="h-screen w-1/2 bg-blue-600">
          <img
            src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;




// const Login = () => {
//     return (
//         <div>
        
// <div className="relative flex h-full w-full">
//   <div className="h-screen w-1/2 bg-black">
//     <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
//       <div>
//         <p className="text-2xl">Login</p>
//         <p>please login to continue</p>
//       </div>
//       <div className="my-6">
//         <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" className="mr-2 w-6 object-fill" />Sign in with Google</button>
//       </div>
//       <div>
//         <fieldset className="border-t border-solid border-gray-600">
//           <legend className="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
//         </fieldset>
//       </div>
//       <div className="mt-10">
//         <form>
//           <div>
//             <label className="mb-2.5 block font-extrabold">Email</label>
//             <input type="email" id="email" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
//           </div>
//           <div className="mt-4">
//             <label className="mb-2.5 block font-extrabold">Password</label>
//             <input type="password" id="email" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
//           </div>
//           <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
           
//             <div><input type="checkbox" id="remember" /><label className="mx-2 text-sm">Remember me</label></div>
           
//             <div>
//               <a href="#" className="text-sm hover:text-gray-200">Forgot password</a>
//             </div>
//           </div>
//           <div className="my-10">
//             <button className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   <div className="h-screen w-1/2 bg-blue-600">
//     <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" className="h-full w-full" />
//   </div>
// </div>  
//         </div>
//     );
// };

// export default Login;