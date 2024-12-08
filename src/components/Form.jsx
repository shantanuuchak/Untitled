function Form() {
  return (
    <form className="flex flex-col gap-1">
      {/* Full Name Field */}
      <input
        type="text"
        name="user-name"
        id="user-name"
        placeholder="Your name"
        className="border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
      />
      {/* Company Field */}
      <input
        type="email "
        name="user-email"
        id="user-email"
        placeholder="your@company.com"
        className="border-b border-stone-700 p-2 md:bg-lime-400 md:placeholder-gray-700"
      />
      {/* Comment */}
      <input
        type="text"
        name="user-comment"
        id="user-comment"
        placeholder="Tell us a little about your project..."
        className="border-b border-stone-700 p-2 h-24 mb-5 md:bg-lime-400 md:placeholder-gray-700"
      />

      {/* Checkbox */}
      <p className="text-zinc-800 mb-5">How can we help?</p>
      <div className="grid grid-cols-2 md:w-96 mb-8">
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="h-5 w-5" />
          Website Design
        </label>
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="h-5 w-5" />
          Content
        </label>
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="h-5 w-5" />
          UX Design
        </label>
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="h-5 w-5" />
          Strategy
        </label>
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="h-5 w-5" />
          User Research
        </label>
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="h-5 w-5" />
          Other
        </label>
      </div>

      <button type="submit" className="bg-zinc-950 text-white p-2 rounded-lg">
        Let's get started!
      </button>
    </form>
  );
}

export default Form;
