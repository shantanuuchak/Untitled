import { useState } from "react";
import { IconNorthStar, IconFlareFilled } from "@tabler/icons-react";

function Form() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    message: "",
    abilities: [], // Holds the selected abilities
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
    formData.append("entry.116084554", input.username);
    formData.append("entry.92462251", input.email);
    formData.append("entry.1433673574", input.message);
    formData.append("entry.143179646", input.abilities);

    fetch(import.meta.env.VITE_GOOGLE_FORM, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Avoid CORS-related errors
    })
      .then(() => alert("Form submitted successfully!"))
      .catch(() => alert("Failed to submit the form."));
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (e, option) => {
    const isChecked = e.target.checked;

    setInput((prevInput) => {
      const updatedAbilities = isChecked
        ? [...prevInput.abilities, option] // Add the option if checked
        : prevInput.abilities.filter((ability) => ability !== option); // Remove if unchecked

      return {
        ...prevInput,
        abilities: updatedAbilities, // Update the abilities array
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
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
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
                checked={input.abilities.includes(option)} // Controlled checkbox state
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
