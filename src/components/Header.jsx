import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-8 flex items-center gap-2">
      <Link to="/">
        <img src="/favicon.png" alt="Logo" className="w-10" />
      </Link>
      <h1 className="font-bold">Untitled UI</h1>
    </header>
  );
}

export default Header;
