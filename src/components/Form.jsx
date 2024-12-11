import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RiSparkling2Fill } from "react-icons/ri";
import Intro from "@/components/Intro";
import configs from "@/utils/configs.js";
import checkProfanity from "@/utils/checkProfanity.js";

function Form() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  const handleFormSubmit = (e) => {
    console.log("Form submitted");

    // Check for prafanity
    checkProfanity(e.message).then((data) => {
      if (data.isProfanity) {
        return navigate("/error", {
          state: { flaggedFor: data.flaggedFor },
        });
      }

      // Submit form information to Google Forms
      const formData = new FormData();
      formData.append(configs.fullnameID, e.fullname);
      formData.append(configs.email, e.email);
      formData.append(configs.messageID, e.message);
      formData.append(configs.services, e.services);

      fetch(configs.formToken, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Avoid CORS-related errors
      })
        .then(() =>
          navigate("/submission", {
            state: {
              name: e.fullname,
            },
          }),
        )
        .catch(() => alert("Failed to submit the form."));
    });
  };

  return (
    <>
      <Intro />

      <form
        className="flex flex-col gap-1"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* FullName */}
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
          {...register("fullname")}
        />
        {/* Email */}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@company.com"
          className="border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
          {...register("email")}
        />
        {/* Message */}
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Tell us a little about your project..."
          className="mb-5 h-24 border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
          {...register("message")}
        />

        {/* Checkbox */}
        <p className="mb-5 text-zinc-800">How can we help?</p>
        <div className="mb-8 grid grid-cols-2 md:w-96">
          {services.map((service, index) => (
            <label
              key={service + index}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                className="h-5 w-5"
                value={service}
                {...register("services")}
              />
              {service}
            </label>
          ))}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-zinc-950 p-2 text-white"
        >
          Let's get started!
          <RiSparkling2Fill className="text-lime-600" size={20} />
        </button>
      </form>
    </>
  );
}

export default Form;
