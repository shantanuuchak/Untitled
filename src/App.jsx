import React from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Info from "./components/Info.jsx";
import Form from "./components/Form.jsx";

function App() {
  return (
    <div className="bg-zinc-50 min-h-screen flex flex-col items-between py-3 px-4">
      <Header />

      <main className="grid grid-cols-8">
        <div className="hidden md:block col-span-2">
          <Info />
        </div>
        <div className="col-span-full md:col-span-6 md:bg-lime-400 py-4 px-4 rounded-lg">
          <Intro />
          <Form />
        </div>
      </main>
    </div>
  );
}

export default App;
