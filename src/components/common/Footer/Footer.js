const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About", url: "/" },
      { label: "Careers", url: "/" },
      { label: "Team", url: "/" },
      { label: "Privacy Policy", url: "/" },
      { label: "Investor Relations", url: "/" },
    ],
    cities: [
      { label: "Bangalore", url: "/" },
      { label: "Gurgaon", url: "/" },
      { label: "Delhi", url: "/" },
      { label: "Mumbai", url: "/" },
      { label: "Pune", url: "/" },
      { label: "Hyderabad", url: "/" },
    ],
  };

  return (
    <div className="w-screen border-t-[1px] border-t-richblack-700 shadow-[-10px_5px_10px_-2px] shadow-caribbeangreen-300">
      <div className="flex justify-around sm:p-10 pb-24 bg-[#000814]">
        {/* Brand Section */}
        <div>
          <h1 className="text-white p-2 text-xl">Foodify</h1>
          <h3 className="text-gray-400 p-2 text-md">©️ 2024</h3>
        </div>

        {/* Company Links */}
        <div>
          <ul>
            <li className="text-white p-2 text-xl">Company</li>
            {footerLinks.company.map((link, index) => (
              <a key={index} href={link.url}>
                <li className="text-gray-400 p-2 text-md">{link.label}</li>
              </a>
            ))}
          </ul>
        </div>

        {/* Cities Links */}
        <div>
          <ul>
            <li className="text-white p-2 text-xl">We deliver to:</li>
            {footerLinks.cities.map((city, index) => (
              <a key={index} href={city.url}>
                <li className="text-gray-400 p-2 text-md">{city.label}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
