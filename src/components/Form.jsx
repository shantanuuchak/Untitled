import { useState } from "react";
import { IconFlareFilled } from "@tabler/icons-react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    abilities: [],
  });

  const helpOptions = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  return (
    <form className="flex flex-col gap-1">
      {/* Full Name Field */}
      <input
        type="text"
        name="user-name"
        id="user-name"
        placeholder="Your name"
        className="border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
        value={input.name}
      />
      {/* Company Field */}
      <input
        type="email "
        name="user-email"
        id="user-email"
        placeholder="your@company.com"
        className="border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
        value={input.email}
      />
      {/* Message */}
      <input
        type="text"
        name="user-message"
        id="user-message"
        placeholder="Tell us a little about your project..."
        className="border-b border-stone-700 p-2 h-24 mb-5 md:bg-lime-400 md:placeholder-gray-700"
        value={input.message}
      />

      {/* Checkbox */}
      {/* TODO: Style checkbox background to green on > medium screens */}
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
              checked={input.abilities.includes(option)}
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
