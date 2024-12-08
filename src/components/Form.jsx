import { useState } from "react";
import { IconFlareFilled } from "@tabler/icons-react";

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
    console.log(input);
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
        className="border-b border-stone-700 p-2 h-24 mb-5 md:bg-lime-400 md:placeholder-gray-700"
        value={input.message}
        onChange={(e) => setInput({ ...input, message: e.target.value })}
        required
      />

      {/* Checkbox */}
      <p className="text-zinc-800 mb-5">How can we help?</p>
      <div className="grid grid-cols-2 md:w-96 mb-8">
        {helpOptions.map((option) => (
          <label
            key={crypto.randomUUID()}
            className="flex gap-2 cursor-pointer"
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
        className="bg-zinc-950 text-white p-2 rounded-lg flex gap-1 justify-center"
      >
        Let's get started! <IconFlareFilled className="text-lime-600" />
      </button>
    </form>
  );
}

export default Form;
