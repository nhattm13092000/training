import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const signUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log("Done");
  };
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
                    [e.target.name]: e.target.name,
                  })
                }
              />
              {errors.email && <span>{errors.email.message?.toString()}</span>}
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
                placeholder="Input password"
                value={input.password}
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
                    [e.target.name]: e.target.name,
                  })
                }
                type="password"
              />
              {errors.password && (
                <span role="alert">{errors.password.message?.toString()}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                id="rewritepassword"
                placeholder="Rewrite password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("rewritepassword", {
                  required: "required",
                  minLength: {
                    value: 5,
                    message: "min length is 5",
                  },
                })}
                type="password"
              />
              {errors.rewritepassword && (
                <span role="alert">{errors.rewritepassword.message?.toString()}</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[rgb(37,99,235,1)] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign up
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              You have an account yet?{" "}
              <NavLink
                to="/signin"
                className="font-medium text-[rgb(37,99,235,1)] hover:underline dark:text-primary-500"
              >
                Sign in
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signUp;
