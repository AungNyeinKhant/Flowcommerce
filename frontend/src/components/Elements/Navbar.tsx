import { BsFillBasket3Fill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import logo from "../../assets/images/flowcommerce-logo.svg";
import defaultAvatar from "../../assets/images/default-avatar.webp";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const { signOut, currentUser } = useAuth();
    const navigate = useNavigate();
    const handleNavClick = () => {
        setDropdownOpen(prevState => !prevState);
    };

    const handleSignOut = () => {
        signOut();
        navigate("/auth/login");
    };

    return (
        <div className="bg-white/70  px-2 xs:px-6 py-5 justify-between rounded-xl items-center my-4 drop-shadow-lg relative z-30">
            <ul className="flex items-center text-sm justify-between">
                <li className="font-bold text-dark ">
                {/* w-40 h-20 */}
                    <Link to="/">
                        <span className="px-4 py-2 border-2 border-[#E0C14F] rounded-lg bg-white/50  shadow-md text-black font-extrabold text-lg hover:bg-blue-100 hover:text-black/70 transition-all duration-200">
                            Flowcommerce
                        </span>
                    
                    
                    </Link>
                </li>
                <div className="flex text-secondary text-lg items-center">
                    <li className="transition-colors hover:text-dark">
                        <Link to="/products/shop">
                            <ImSearch />
                        </Link>
                    </li>
                    
                    <li className="transition-colors hover:text-dark ml-7">
                        <Link to="/products/favorites">
                            <MdFavorite />
                        </Link>
                    </li>
                    <li className="transition-colors hover:text-dark ml-7">
                        <Link to="/cart">
                            <BsFillBasket3Fill />
                        </Link>
                    </li>
                    
                </div>
                <div className="flex text-secondary text-lg items-center">
                <li className="font-medium text-sm text-dark relative ml-5">
                        <button className="flex items-center" onClick={handleNavClick}>
                            <span className="sr-only">Account</span>
                            <img className="w-8 h-8 rounded-full" src={currentUser?.photoURL || defaultAvatar} alt="User avatar" />
                            <FaChevronDown className="ml-1 text-secondary" />
                        </button>

                        {dropdownOpen && (
                            <div className="z-10 transform animate-dropdown origin-top-right absolute mb-10 mt-4 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                {currentUser &&
                                <div className="px-4 py-3 text-sm text-dark">
                                    <div>{currentUser?.displayName}</div>
                                    <div className="font-medium truncate">
                                        {currentUser?.email}
                                    </div>
                                </div>
                                }
                                <ul className="py-2 text-sm text-dark-200">
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                        Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            state={{ destination: "profile" }}
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                        Settings
                                        </Link>
                                    </li>
                                </ul>
                                <div className="py-2">
                                    <button
                                        onClick={handleSignOut}
                                        className="px-4 py-2 text-left hover:bg-gray-100 w-full text-sm text-dark"
                                    >
                      Sign out
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;