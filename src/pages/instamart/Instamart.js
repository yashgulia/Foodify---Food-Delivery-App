import React, { useState } from "react";
import { FaBox, FaClock, FaMapMarkerAlt, FaTruck } from "react-icons/fa";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-emerald-700/30 rounded-lg mb-4 overflow-hidden">
      <div
        className="bg-[#0D1321] p-6 cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h3 className="text-xl font-semibold text-emerald-400 flex items-center justify-between">
          {title}
          <span className="text-sm text-emerald-500">
            {isVisible ? "▼" : "▶"}
          </span>
        </h3>
      </div>
      {isVisible && (
        <div className="p-6 bg-[#141B2D] text-gray-300">{description}</div>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const features = [
    {
      icon: <FaClock className="text-4xl text-emerald-500 mb-4" />,
      title: "Express Delivery",
      description: "Get your groceries delivered within 15-30 minutes",
    },
    {
      icon: <FaBox className="text-4xl text-emerald-500 mb-4" />,
      title: "Wide Selection",
      description: "Choose from over 5000+ products across categories",
    },
    {
      icon: <FaTruck className="text-4xl text-emerald-500 mb-4" />,
      title: "Free Delivery",
      description: "Free delivery on orders above ₹199",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-emerald-500 mb-4" />,
      title: "Live Tracking",
      description: "Real-time tracking of your order",
    },
  ];

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 md:px-8 lg:px-16 bg-[#0A0F1C]">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
          Welcome to Instamart
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Your one-stop shop for groceries, fresh produce, and daily essentials.
          Get everything delivered to your doorstep in minutes!
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-[#141B2D] rounded-lg border border-emerald-700/30 text-center hover:scale-105 transition-transform duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* FAQ Sections */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>

        <Section
          title="What is Instamart?"
          description="Instamart is our instant delivery service for fresh groceries, fruits, vegetables, and other daily essential items. We promise delivery within 15-30 minutes!"
          isVisible={visibleSection === "what"}
          setIsVisible={() =>
            setVisibleSection(visibleSection === "what" ? "" : "what")
          }
        />

        <Section
          title="How does it work?"
          description="Simply browse through our wide selection of products, add items to your cart, and checkout. Our delivery partners will pick up your order from the nearest dark store and deliver it to your doorstep within minutes."
          isVisible={visibleSection === "how"}
          setIsVisible={() =>
            setVisibleSection(visibleSection === "how" ? "" : "how")
          }
        />

        <Section
          title="What are the delivery charges?"
          description="Delivery is FREE for orders above ₹199. For orders below ₹199, a nominal delivery fee of ₹29 will be charged."
          isVisible={visibleSection === "delivery"}
          setIsVisible={() =>
            setVisibleSection(visibleSection === "delivery" ? "" : "delivery")
          }
        />

        <Section
          title="What is the return policy?"
          description="If you're not satisfied with any product, you can return it at the time of delivery and get an instant refund. For any quality issues, please raise a complaint within 24 hours of delivery."
          isVisible={visibleSection === "return"}
          setIsVisible={() =>
            setVisibleSection(visibleSection === "return" ? "" : "return")
          }
        />
      </div>
    </div>
  );
};

export default Instamart;
