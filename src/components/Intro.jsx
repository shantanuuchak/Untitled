import { IconNorthStar } from "@tabler/icons-react";
function Intro() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-5">
        Got Ideas? <IconNorthStar className="inline-block" /> We've got <br />{" "}
        the skills. Let's team up.
      </h1>
      <p className="mb-6 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>
    </>
  );
}

export default Intro;
