import { useForm } from "react-hook-form";
import { DatePicker } from "antd";
import moment from "moment";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
const formOnBlur = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const disableDateRanges = () => {
    const startDate = moment("1980-01-01");
    const endDate = moment("2021-01-01");
    return function disabledDate(current: any) {
      return (
        current && (current.isBefore(startDate) || current.isAfter(endDate))
      );
    };
  };

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < dayjs();
  };
  

  return (
    <div className="mb-24">
      <h1 className="my-6 text-lg font-bold">
        Thực hành validate form - onSubmit
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[100%] space-y-4 md:space-y-6"
      >
        <div className="flex w-[100%]">
          <div className="w-[45%] mr-[25px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username:
            </label>
            <input
              placeholder="Username"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("usernameSub", {
                required: "Username is required",
                minLength: {
                  value: 8,
                  message:
                    "Tối thiểu 8 kỹ tự, không được bao gồm chữ viết hoa, số và ký tự đặc biệt.",
                },
                pattern: {
                  value: /^[a-z]+$/,
                  message:
                    "Tối thiểu 8 kỹ tự, không được bao gồm chữ viết hoa, số và ký tự đặc biệt.",
                },
              })}
            />
            {errors.usernameSub && (
              <span className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]">
                {errors.usernameSub.message?.toString()}
              </span>
            )}
          </div>

          <div className="w-[45%] mr-[25px]">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="Input password"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("passwordSub", {
                required: "required",
                minLength: {
                  value: 8,
                  message:
                    "Tối thiểu 8 ký tự, phải bao gồm một chữ viết hoa, một ký tự đặc biệt và một số.",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).+$/,
                  message:
                    "Tối thiểu 8 ký tự, phải bao gồm một chữ viết hoa, một ký tự đặc biệt và một số..",
                },
              })}
              type="password"
            />
            {errors.passwordSub && (
              <span
                className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]"
                role="alert"
              >
                {errors.passwordSub.message?.toString()}
              </span>
            )}
          </div>
        </div>
        <div className="flex w-[100%]">
          <div className="w-[45%] mr-[25px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Confirm Password:
            </label>
            <input
              placeholder="Confirm Password"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("confirmpass", {
                required: "Confirmpassword is required",
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              type="password"
            />
            {errors.confirmpass && (
              <span className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]">
                {errors.confirmpass.message?.toString()}
              </span>
            )}
          </div>

          <div className="w-[45%] mr-[25px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              placeholder="Input your email"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Nhập đúng email",
                },
              })}
            />
            {errors.email && (
              <span
                className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]"
                role="alert"
              >
                {errors.email.message?.toString()}
              </span>
            )}
          </div>
        </div>
        <div className="flex w-[100%]">
          <div className="w-[45%] mr-[25px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone Number
            </label>
            <input
              placeholder="Input phonenumber"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("phoneNumber", {
                required: "PhoneNumber is required",
                minLength: {
                  value: 10,
                  message:
                    "Ít nhất 10 chữ số, bắt đầu bằng 0, không được bao gồm chữ cái hoặc ký tự đặc biệt",
                },
                pattern: {
                  value: /^0\d*$/,
                  message:
                    "Ít nhất 10 chữ số, bắt đầu bằng 0, không được bao gồm chữ cái hoặc ký tự đặc biệt",
                },
              })}
            />
            {errors.phoneNumber && (
              <span className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]">
                {errors.phoneNumber.message?.toString()}
              </span>
            )}
          </div>

          <div className="w-[45%] mr-[25px]">
            <label
              htmlFor="url"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Website
            </label>
            <input
              placeholder="Input website"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("url", {
                required: "Webtsite is required",
                pattern: {
                  value:
                    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
                  message: "Nhập đúng định dạng url",
                },
              })}
              type="text"
            />
            {errors.url && (
              <span
                className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]"
                role="alert"
              >
                {errors.url.message?.toString()}
              </span>
            )}
          </div>
        </div>

        <div className="flex w-[100%]">
          <div className="w-[45%] mr-[25px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              BirthDate
            </label>
            <DatePicker
              className="w-[100%] h-[60%]"
              format="DD-MM-YYYY"
              disabledDate={disableDateRanges()}
            />
            {errors.birthDate && (
              <span className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]">
                {errors.birthDate.message?.toString()}
              </span>
            )}
          </div>

          <div className="w-[45%] mr-[25px]">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              placeholder="Input firstName"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("firstName", {
                required: "First Name is required",
              })}
            />
            {errors.firstName && (
              <span
                className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]"
                role="alert"
              >
                {errors.firstName.message?.toString()}
              </span>
            )}
          </div>
        </div>

        <div className="flex w-[100%]">
          <div className="w-[45%] mr-[25px]">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              placeholder="Input lastName"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("lastName", {
                required: "Last Name is required",
              })}
            />
            {errors.lastName && (
              <span
                className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]"
                role="alert"
              >
                {errors.lastName.message?.toString()}
              </span>
            )}
          </div>

          <div className="w-[45%] mr-[25px]">
            <label
              htmlFor="urlFace"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              FaceBook
            </label>
            <input
              placeholder="Input facebook url"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("urlFace", {
                required: "FaceBookURL is required",
                pattern: {
                  value:
                    /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
                  message: "Nhập đúng định dạng facebook",
                },
              })}
              type="text"
            />
            {errors.urlFace && (
              <span
                className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]"
                role="alert"
              >
                {errors.urlFace.message?.toString()}
              </span>
            )}
          </div>
        </div>
        <div className="flex w-[100%]">
          <div className="w-[45%] mr-[25px]">
            <label
              htmlFor="linkedin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Linkedin
            </label>
            <input
              placeholder="Input linkedin url"
              className="w-[100%] bg-[#fff] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("urlLinkedin", {
                required: "LinkedinkURL is required",
                pattern: {
                  value:
                    /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm,
                  message: "Nhập đúng định dạng linkedin",
                },
              })}
              type="text"
            />
            {errors.urlLinkedin && (
              <span
                className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]"
                role="alert"
              >
                {errors.urlLinkedin.message?.toString()}
              </span>
            )}
          </div>

          <div className="w-[45%] mr-[25px]">
            <label
              htmlFor="urlFace"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              FaceBook
            </label>
            <DatePicker.RangePicker
              disabledDate={disabledDate}
            />
            {errors.urlLinkedin && (
              <span
                className="ml-[5px] mt-[5px] text-[rgb(220,38,38,1)]"
                role="alert"
              >
                {errors.urlLinkedin.message?.toString()}
              </span>
            )}
          </div>
        </div>

        <button
        type="submit"
        className=" mt-[20px] w-[100px] text-white bg-[rgb(37,99,235,1)] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Save
      </button>
      </form>
    </div>
  );
};

export default formOnBlur;
