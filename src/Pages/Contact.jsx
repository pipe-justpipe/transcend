import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Form submitted successfully!");
  };

  return (
    <section id="contact" className="lg:mt-[150px] md:mt-[100px] mt-[70px]">
      <h1
        className="text-[#1C0F30] lg:text-[40px] md:text-[30px] text-[25px] leading-[50px] text-center font-medium"
        id="demo"
      >
        Contact Us
      </h1>
      <p className="w-full max-w-[1180px] text-center mx-auto lg:text-[20px] md:text-[16px] text-[12px] leading-[30px] text-[#31135E] font-normal mt-[50px] mb-[40px] md:mb-[70px] lg:mb-[100px]">
        Have a question, comment, or feedback for us? We'd love to hear from
        you!
      </p>

      <div className="w-4/5 mx-auto rounded-[50px] border border-solid py-[60px] border-[#BE95FF]">
        <form
          className="mx-auto flex flex-col gap-[40px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="flex flex-wrap gap-[20px] justify-between w-4/5 mx-auto">
            <input
              className="border outline-none border-solid border-black border-opacity-25 lg:w-[480.18px] md:w-[380px] w-full mx-auto rounded-[12px] px-[20px] py-[16px]"
              placeholder="What is your name? *"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              className="border outline-none border-solid border-black border-opacity-25 lg:w-[480.18px] md:w-[380px] w-full mx-auto rounded-[12px] px-[20px] py-[16px]"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <textarea
            className="border-2 outline-none py-[16px] px-[20px] border-solid border-[#642AC3] w-4/5 mx-auto h-[212px] flex justify-center rounded-[12px]"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm w-4/5">{errors.message.message}</p>
          )}

          <div className="flex justify-end w-4/5 mx-auto">
            <button className="py-[16px] px-[20px] w-[137px] text-sm text-white bg-gradient-to-br from-purple-600 to-indigo-600 rounded-md">
              Submit
            </button>
          </div>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          draggable
          pauseOnHover
        />
      </div>
    </section>
  );
};

export default Contact;
