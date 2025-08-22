import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Menu, X, TicketCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  useEffect(() => {
    if (user?.emailAddresses[0].emailAddress === "admin@gmail.com") {
      navigate("/admin");
    }
  }, [user, navigate]);

  return (
    <nav className="w-full bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-3 px-4 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            🍽 Asr-Somsa
          </h1>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Nav Items */}
          <div className="flex gap-5">
            {navLinks.map((item) => (
              <Link key={item.route} to={item.route}>
                <span className="text-white/80 hover:text-white hover:scale-105 transition-all text-lg font-medium">
                  {t(item.name)}
                </span>
              </Link>
            ))}
          </div>

          {/* Language */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-lg hover:bg-white/20 transition"
          >
            <option value="uz">🇺🇿 UZ</option>
            <option value="en">🇬🇧 EN</option>
            <option value="ru">🇷🇺 RU</option>
          </select>

          {/* Auth */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-white text-red-600 font-bold hover:bg-gray-200 transition px-4 py-2 rounded-lg">
                Kirish
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border-2 border-white rounded-full",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Action
                  onClick={() => navigate("/profile")}
                  label="Profil"
                  labelIcon={<TicketCheck width={15} />}
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-red-600 rounded-lg p-4 space-y-4 shadow-lg">
          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-left text-lg font-semibold text-white/90 hover:text-white hover:translate-x-1 transition">
                  {t(item.name)}
                </span>
              </Link>
            ))}
          </div>

          {/* Language */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="w-full bg-white/10 border border-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition"
          >
            <option value="uz">🇺🇿 UZ</option>
            <option value="en">🇬🇧 EN</option>
            <option value="ru">🇷🇺 RU</option>
          </select>

          {/* Contact + Auth */}
          <div className="border-t border-white/20 pt-4">
            <h1 className="text-lg font-bold mb-3">📞 +998 99 947 99 47</h1>
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="bg-white text-red-600 w-full hover:bg-gray-200 transition">
                  Kirish
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
