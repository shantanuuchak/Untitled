import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconNorthStar, IconFlareFilled } from "@tabler/icons-react";
import configs from "../utils/configs.js";

function Form() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    message: "",
    services: [],
  });

  const helpOptions = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(configs.fullnameID, input.fullname);
    formData.append(configs.email, input.email);
    formData.append(configs.messageID, input.message);
    formData.append(configs.services, input.services);

    fetch(configs.formToken, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Avoid CORS-related errors
    })
      .then(() => navigate("/submission"))
      .catch(() => alert("Failed to submit the form."));
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (e, option) => {
    const isChecked = e.target.checked;

    setInput((prevInput) => {
      const updatedServices = isChecked
        ? [...prevInput.services, option] // Add the option if checked
        : prevInput.services.filter((service) => service !== option); // Remove if unchecked

      return {
        ...prevInput,
        services: updatedServices, // Update the services array
      };
    });
  };

  return (
    <>
      <h1 className="mb-5 text-3xl font-semibold">
        Got Ideas? <IconNorthStar className="inline-block" /> We've got <br />
        the skills. Let's team up.
      </h1>
      <p className="mb-6 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        {/* Full Name Field */}
        <input
          type="text"
          name="user-name"
          id="user-name"
          placeholder="Your name"
          className="border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
          value={input.fullname}
          onChange={(e) => setInput({ ...input, fullname: e.target.value })}
          required
        />
        {/* Company Field */}
        <input
          type="email"
          name="user-email"
          id="user-email"
          placeholder="your@company.com"
          className="border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          required
        />
        {/* Message */}
        <input
          type="text"
          name="user-message"
          id="user-message"
          placeholder="Tell us a little about your project..."
          className="mb-5 h-24 border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
          value={input.message}
          onChange={(e) => setInput({ ...input, message: e.target.value })}
          required
        />

        {/* Checkbox */}
        <p className="mb-5 text-zinc-800">How can we help?</p>
        <div className="mb-8 grid grid-cols-2 md:w-96">
          {helpOptions.map((option) => (
            <label
              key={crypto.randomUUID()}
              className="flex cursor-pointer gap-2"
            >
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={input.services.includes(option)} // Controlled checkbox state
                onChange={(e) => handleCheckboxChange(e, option)} // Handle change
              />
              {option}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="flex justify-center gap-1 rounded-lg bg-zinc-950 p-2 text-white"
        >
          Let's get started! <IconFlareFilled className="text-lime-600" />
        </button>
      </form>
    </>
  );
}

export default Form;
