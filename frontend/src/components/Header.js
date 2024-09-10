import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useAuth0 } from "@auth0/auth0-react";
import { VoiceControl } from "./VoiceControl";
import LinksSection from "./Link";

const Header = () => {
  const { dark, setDark } = useContext(UserContext);
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  return (
    <header className="fixed top-0 left-0 right-0 bg-custom-gradient text-white p-6 z-50 flex justify-between items-center shadow-none h-16">
      <div className="text-xl font-bold">NeoChat</div>
      <LinksSection />
      <nav className="space-x-6">
        <VoiceControl />
        <Link to="/chat" className="hover:underline">
          Chat
        </Link>
        <Link to="/" className="hover:underline">
          Home
        </Link>
        {!isAuthenticated ? (
          <button
            onClick={(e) => loginWithRedirect()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        ) : (
          <button
            onClick={(e) => logout()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        )}
        <button
          onClick={() => setDark(!dark)}
          className={`px-4 py-2 rounded-lg font-semibold text-white ${
            dark ? "bg-gray-500" : "bg-red-500"
          }`}
        >
          {dark ? "Dark" : "Light"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
