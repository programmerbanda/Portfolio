import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="flex justify-between items-center h-14 px-4 sm:px-6 md:px-20">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer">
            Shubham
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-10">
              {["Home", "About", "Portfolio", "Skills"].map(
                (item) => (
                  <li key={item}>
                    <a
                      className="relative text-base font-medium text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full hover:text-indigo-600"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition cursor-pointer">
              Hire Me
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4">
              {["Home", "About", "Portfolio", "Skills"].map(
                (item) => (
                  <li key={item}>
                    <a
                      className="text-base font-medium text-gray-700 hover:text-indigo-600 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
                      href={`#${item.toLowerCase()}`}
                      onClick={toggleMenu} // Close menu on link click
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition cursor-pointer"
                  onClick={toggleMenu}
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
      <main>


      </main>
    </>
  );
}

export default App;
