import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="flex justify-between items-center h-14 px-4 sm:px-6 md:px-20">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer">
            Shubham
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-10">
              {["Home", "About", "Portfolio", "Skills"].map((item) => (
                <li key={item}>
                  <a
                    className="relative text-base font-medium text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#2563eb] after:transition-all after:duration-300 hover:after:w-full hover:text-[#2563eb]"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 bg-[#2563eb] text-white rounded-lg shadow-md hover:bg-[#2563eb] transition cursor-pointer">
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
              {["Home", "About", "Portfolio", "Skills"].map((item) => (
                <li key={item}>
                  <a
                    className="text-base font-medium text-gray-700 hover:text-[#2563eb] relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#2563eb] after:transition-all after:duration-300 hover:after:w-full"
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu} // Close menu on link click
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="px-4 py-2 bg-[#2563eb] text-white rounded-lg shadow-md hover:bg-[#2563eb] transition cursor-pointer"
                  onClick={toggleMenu}
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
      <main className="min-h-screen pt-14">
        <section>
          <div className="flex flex-col lg:flex-row">
            {/* Text Content */}
            <div className="flex-1 items-center py-12 px-6 md:px-12 lg:px-16 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              <div className="max-w-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Shubham Tiwari
                  </span>
                </h1>
                <p className="py-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  Full Stack Developer specializing in building performant,
                  accessible web applications with modern technologies. I create
                  digital experiences that users love.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <a
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-md font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg text-white"
                    href="#projects"
                  >
                    View My Work
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border-2 border-blue-600 font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg text-blue-600 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                    href="#contact"
                  >
                    Contact Me
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
              <div className="relative max-w-md w-full">
                <div className="absolute -inset-4 bg-blue-600/10 dark:bg-blue-400/10 rounded-2xl rotate-3"></div>
                <img
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shubham Tiwari - Full Stack Developer"
                />

                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold">
                    1+ Years Experience
                  </div>
                </div>

                {/* Tech stack floating elements */}
                <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 py-2 px-3 rounded-lg shadow-md">
                  <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    Full Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
