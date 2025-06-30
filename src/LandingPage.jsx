import React from "react";

const LandingPage = ({ disableInstall, handleInstall }) => {
  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">getstrongerme</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
            {!disableInstall && (
              <button
                onClick={handleInstall}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg text-lg transition duration-300"
              >
                Install App
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2379653/pexels-photo-2379653.jpeg?cs=srgb&dl=pexels-david-bartus-43782-2379653.jpg&fm=jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            get your business online
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
            with stronger populairty, traffic, and conversions!
          </p>
          <a
            href="#features"
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Our Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Speed</h4>
              <p className="text-gray-600">
                Blazing fast performance with optimized experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Security</h4>
              <p className="text-gray-600">
                Your data is safe and protected at all times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Support</h4>
              <p className="text-gray-600">
                We offer 24/7 support with real humans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Call to Action Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20221130/pngtree-bright-office-startup-team-brainstorming-on-laptops-and-tablets-photo-image_42787972.jpg"
              alt="Teamwork"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-3xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-6">
              We’re a passionate team driven by creativity, innovation, and a
              desire to empower others.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
