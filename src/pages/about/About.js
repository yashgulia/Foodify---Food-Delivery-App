import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import aboutImage from "../../img/about-img.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 my-16 animate-fadeIn">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text animate-slideDown">
            About Foodify
          </h1>
          <p className="text-gray-300 text-lg mb-8 animate-slideUp">
            Welcome to Foodify, where passion meets plate! We're on a mission to
            revolutionize your dining experience by connecting you with the best
            local restaurants and delivering delicious meals right to your
            doorstep.
          </p>
          <div className="flex gap-4 animate-slideUp">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors hover:-translate-y-1 duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors hover:-translate-y-1 duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors hover:-translate-y-1 duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="About Foodify"
            className="rounded-lg shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-transform duration-300 animate-fadeIn"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Wide Selection",
            description: "Choose from thousands of restaurants and cuisines.",
            icon: "🍽️",
          },
          {
            title: "Fast Delivery",
            description: "Quick and reliable delivery to your doorstep.",
            icon: "🚀",
          },
          {
            title: "Best Prices",
            description: "Competitive prices and regular special offers.",
            icon: "💰",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-richblack-900 p-6 rounded-lg border border-emerald-700/30 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <span className="text-4xl mb-4 block">{feature.icon}</span>
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { number: "1000+", label: "Restaurants" },
          { number: "50k+", label: "Happy Customers" },
          { number: "100k+", label: "Deliveries" },
          { number: "4.8", label: "App Rating" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-richblack-900 rounded-lg border border-emerald-700/30 hover:scale-105 transition-all duration-300 animate-fadeIn"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
              {stat.number}
            </h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
