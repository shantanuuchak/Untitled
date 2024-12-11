import { useLocation } from "react-router-dom";
import Header from "@/components/Header";

function Submission() {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div className="items-between flex min-h-screen flex-col bg-zinc-50 px-4 py-3 md:px-8">
      <Header />

      <main className="grid grid-cols-8">
        <div className="col-span-full rounded-lg bg-lime-400 px-4 py-4">
          <h1 className="text-3xl">Form Submission Successful!</h1>
          <p className="mb-10">{name} your form is submitted successfully!</p>

          <p className="text-xl text-stone-600">
            View all submissions{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQmHmrl0S_iIn8xBh8PZh-wvEBPqd_JHuUkPuYLrp2MSSYoVZeu8lbzq0Heif4qEDYX8PZmwUKuQxJk/pubhtml?gid=715194774&single=true"
              target="_blank"
              className="text-blue-800"
            >
              here
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

export default Submission;
