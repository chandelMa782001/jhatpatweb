import { useState } from 'react';
import logo from '../assets/logo/jhatpatlog.png';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const navitem=[
    {name:"Features",link:"#feature"},
    {name:"partners",link:"#partners"},
    {name:"Rewards",link:"#rewards"},
    {name:"Contact",link:"#contact"}
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img onClick={()=>navigate('/')} src={logo} alt="Jhatpat Booking" className="h-[45px] w-[145px]" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
         {
            navitem.map((item, index) => (
    <Link
      key={index}
      to={item.link}
      className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors"
    >
      {item.name}
    </Link>
  ))
         }
          </div>
            <button className="bg-[#FF6B35] hidden md:block hover:bg-[#FF5722] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Notified
            </button>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="#features" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Features
              </Link>
              <Link to="#partners" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Partners
              </Link>
              <Link to="#rewards" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Rewards
              </Link>
              <Link to="#contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
