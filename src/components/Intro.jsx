import { RiMagicLine } from "react-icons/ri";

function Intro() {
  return (
    <>
      <h1 className="max-w-96 text-3xl font-semibold">
        Got Ideas? <RiMagicLine className="inline-block text-gray-950" /> We've
        got the skills. Let's team up.
      </h1>
      <p className="my-6 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>
    </>
  );
}

export default Intro;
