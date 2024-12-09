import Header from "../components/Header.jsx";
import Aside from "../components/Aside.jsx";
import Form from "../components/Form.jsx";

function App() {
  return (
    <div className="items-between flex min-h-screen flex-col bg-zinc-50 px-4 py-3 md:px-8">
      <Header />

      <main className="grid grid-cols-8">
        <div className="col-span-2 hidden md:block">
          <Aside />
        </div>
        <div className="col-span-full rounded-lg px-4 py-4 md:col-span-6 md:bg-lime-400">
          <Form />
        </div>
      </main>
    </div>
  );
}

export default App;
