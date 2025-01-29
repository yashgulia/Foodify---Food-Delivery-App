import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-emerald-400" size={20} />,
      title: "Phone",
      details: "+91 9876543210",
      subDetails: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <FaEnvelope className="text-emerald-400" size={20} />,
      title: "Email",
      details: "support@foodify.com",
      subDetails: "Online support 24/7",
    },
    {
      icon: <FaMapMarkerAlt className="text-emerald-400" size={20} />,
      title: "Office",
      details: "123 Food Street",
      subDetails: "Gurgaon, Haryana",
    },
  ];

  return (
    <div className="min-h-screen py-24 mt-20 px-4 md:px-8 lg:px-16 bg-richblack-900">
      {/* Header Section */}
      <div className="text-center mb-16 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text animate-slideDown">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg animate-slideUp">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid text-center md:grid-cols-3 gap-8 mb-16">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-richblack-800 p-6 rounded-lg border border-emerald-700/30 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              {info.icon}
              <h3 className="text-xl font-semibold text-emerald-400">
                {info.title}
              </h3>
            </div>
            <p className="text-gray-300 mb-2">{info.details}</p>
            <p className="text-gray-400 text-sm">{info.subDetails}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div
        className="max-w-3xl mx-auto animate-fadeIn"
        style={{ animationDelay: "600ms" }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-emerald-400 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-richblack-800 border border-emerald-700/30 focus:border-emerald-500 focus:outline-none text-gray-300 transition-all duration-300"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-emerald-400 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-richblack-800 border border-emerald-700/30 focus:border-emerald-500 focus:outline-none text-gray-300 transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-emerald-400 mb-2">Subject</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-richblack-800 border border-emerald-700/30 focus:border-emerald-500 focus:outline-none text-gray-300 transition-all duration-300"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-emerald-400 mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-richblack-800 border border-emerald-700/30 focus:border-emerald-500 focus:outline-none text-gray-300 transition-all duration-300"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold text-white 
              ${
                isSubmitting
                  ? "bg-emerald-700 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600 hover:-translate-y-1"
              } 
              transition-all duration-300`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="text-emerald-400 text-center mt-4 animate-fadeIn">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
