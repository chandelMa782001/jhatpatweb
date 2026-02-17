import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo/jhatpatlog.png";
const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Hotel Bookings",
        "Flight Tickets",
        "Train Bookings",
        "Bus Travel",
        "Cab Services",
        "Event Venues",
      ],
    },
    {
      title: "Partners",
      links: [
        "List Your Property",
        "Become a Driver",
        "Business Solutions",
        "Partner Support",
      ],
    },
  ];
  const socialIcons = [Facebook, Twitter, Instagram, Linkedin];
  const bottomLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];
  return (
    <footer className="bg-[#0f1b2d] text-gray-400 pt-14 pb-8 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        <div>
          <div className="bg-white inline-block p-1 mb-2">
            <img src={logo} alt="jhatpatLogo" className="h-[48px] w-[145px] " />
          </div>
          <p className="text-sm leading-6">
            India's most comprehensive booking platform for travel,
            stays, rides, and event venues.
          </p>
        </div>
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-white cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="flex items-center gap-2 mb-3 text-sm">
            <Mail size={16} />
            <span>info@jhatpatbooking.com</span>
          </div>

          <div className="flex items-center gap-2 mb-4 text-sm">
            <MapPin size={16} />
            <span>New Delhi, India</span>
          </div>
          <div className="flex gap-3">
            {socialIcons.map((Icon, index) => (
              <div
                key={index}
                className="bg-[#1c2a3f] p-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer transition"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
        <p>© 2025 Jhatpat Booking. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          {bottomLinks.map((link, index) => (
            <span
              key={index}
              className="hover:text-white cursor-pointer transition"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
