import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom"

const signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = () => {
    const logUser = JSON.parse(localStorage.getItem("user") || '{}'); 
    if(input.email === logUser.email && input.password === logUser.password){
      localStorage.setItem("logined", "true");
      navigate('/welcome')
    }else{
      alert('Wrong email or password');
    }
  };

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-[100vh] flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email:
              </label>
              <input
                value={input.email}
                placeholder="name@company.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {errors.email && <span className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]">{errors.email.message?.toString()}</span>}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                id="password"
                value={input.password}
                placeholder="Input password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("password", {
                  required: "required",
                  minLength: {
                    value: 5,
                    message: "min length is 5",
                  },
                })}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                type="password"
              />
              {errors.password && (
                <span className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]" role="alert">{errors.password.message?.toString()}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="coding"
                    name="interest"
                    value="coding"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-gray-500 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
              <a className="text-sm font-medium text-[rgb(37,99,235,1)] hover:underline dark:text-primary-500 cursor-pointer">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[rgb(37,99,235,1)] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Dont have any account yet?
              <NavLink
                to="/signup"
                className="font-medium text-[rgb(37,99,235,1)] hover:underline dark:text-primary-500"
              >
                Sign up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signin;
