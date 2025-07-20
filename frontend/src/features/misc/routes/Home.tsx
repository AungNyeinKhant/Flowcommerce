import { CaterogyBox } from "../components/CaterogyBox";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import categoryLifestyle from "../../../assets/images/Home/Lifestyle.jpg";
import categoryBooks from "../../../assets/images/Home/books.jpg";
import categoryElectronic from "../../../assets/images/Home/electronic.jpg";
import categoryFurniture from "../../../assets/images/Home/furniture.jpg";

import combo1 from "../../../assets/images/Home/combo1.jpg";
import combo2 from "../../../assets/images/Home/combo2.jpg";
import combo3 from "../../../assets/images/Home/combo3.jpg";
import combo4 from "../../../assets/images/Home/combo4.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiGift } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <Showcase />
            <div className="container">
                {/* Homepage Categories Section */}
                <div className="mb-24">
                    <div className="flex justify-between mb-2 md:mb-5">
                        <h3 className="font-semibold text-xl md:text-3xl mr-5 xs:mr-0">
                Shop by Category
                        </h3>
                        <div className="hidden cursor-pointer xs:flex flex-wrap font-medium hover:underline items-center text-base">
                            <Link to="/products/shop" className="block mr-1 sm:mr-2 w-fit">
                  Browse all categories
                            </Link>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="scrollbar-hidden flex flex-nowrap overflow-x-auto overflow-y-hidden overscroll-x-contain py-4 space-x-8">
                        <CaterogyBox title="Lifestyle" img={categoryLifestyle} />
                        <CaterogyBox title="Books" img={categoryBooks} />
                        <CaterogyBox title="Electronic" img={categoryElectronic} />
                        <CaterogyBox title="Furniture" img={categoryFurniture} />
                        
                    </div>
                </div>
                {/* End Homepage Categories Section */}

                {/* Homepage New Arrivals Section */}
                <div className="mb-24 bg-newArrivals bg-cover bg-center bg-no-repeat text-center text-white rounded-lg">
                    <div className="bg-black-cover w-full h-full px-8 py-20 md:px-16 lg:px-24 rounded-lg">
                        <h2 className="font-bold text-4xl sm:text-5xl mb-8">
                        Our Fresh Drop Has Landed!
                        </h2>
                        <p className="text-base sm:text-lg mb-8">
                        Forget fitting in. This season, it's all about standing out, shining bold, and embracing your individual genius. We believe your style should be as limitless as your ambition. 
                        </p>
                        <Link to="/products/shop" className="font-semibold text-sm bg-white bg-opacity-20 transition hover:bg-opacity-40 rounded-md py-2 px-4 border-[1px] border-white border-opacity-[45%]">
                Explore
                        </Link>
                    </div>
                </div>
                {/* End Homepage New Arrivals Section */}

                {/* Homepage Basic Starter Section */}
                <div className="flex flex-col lg:flex-row mb-24">
                    <div className="w-full lg:w-1/2 shrink-0 mb-8 mr-0 lg:mr-8">
                        <h3 className="font-semibold text-3xl sm:text-4xl mb-4">
                        Active Essential Kit
                        </h3>
                        <p className="text-secondary mb-12">
                        Elevate your every move with the Active Essential Kit, meticulously designed for ultimate performance and comfort.
                        </p>
                        <div className="max-[300px]:text-xs">
                            <div className="flex space-x-4">
                                <div className="p-4 border-t-[1px] w-1/2">
                                    <h6 className="font-semibold mb-2">Origin</h6>
                                    <p className="text-secondary mb-4">
                                    Engineered for Peak Performance by FlowAthletics
                                    </p>
                                </div>
                                <div className="p-4 border-t-[1px] w-1/2">
                                    <h6 className="font-semibold mb-2">Material</h6>
                                    <p className="text-secondary mb-4">
                                    Polyester/Spandex for a breathable, quick-drying, and flexible feel.
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="p-4 border-t-[1px] w-1/2">
                                    <h6 className="font-semibold mb-2">Fit & Function</h6>
                                    <p className="text-secondary mb-4">Contoured, second-skin fit with four-way stretch, offering unrestricted mobility and targeted support.</p>
                                </div>
                                <div className="p-4 border-t-[1px] w-1/2">
                                    <h6 className="font-semibold mb-2">Construction </h6>
                                    <p className="text-secondary mb-4">
                                    Smooth, flatlock seams to minimize chafing and irritation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="p-4 border-t-[1px] w-1/2">
                                    <h6 className="font-semibold mb-2">Includes</h6>
                                    <p className="text-secondary mb-4">
                                    1 Performance Sports Bra.1 High-Waist Compression Leggings.1 Adjustable Athletic Cap.
                                    </p>
                                </div>
                                <div className="p-4 border-t-[1px] w-1/2">
                                    <h6 className="font-semibold mb-2">Considerations</h6>
                                    <p className="text-secondary mb-4">
                                    Ideal for medium to high-impact activities and everyday active wear.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 h-fit">
                        <img
                            className="rounded-xl object-cover w-full h-[150px] xs:h-[200px] md:h-[250px] lg:h-[300px]"
                            src={combo1}
                        />
                        <img
                            className="rounded-xl object-cover w-full h-[150px] xs:h-[200px] md:h-[250px] lg:h-[300px]"
                            src={combo2}
                        />
                        <img
                            className="rounded-xl object-cover w-full h-[150px] xs:h-[200px] md:h-[250px] lg:h-[300px]"
                            src={combo3}
                        />
                        <img
                            className="rounded-xl object-cover w-full h-[150px] xs:h-[200px] md:h-[250px] lg:h-[300px]"
                            src={combo4}
                        />
                    </div>
                </div>
                {/* End Homepage Basic Starter Section */}

                {/* Homepage Discounts Section */}
                <div className="border-[1px] border-[#979797] rounded-xl bg-discounts bg-cover bg-no-repeat bg-center px-4 xs:px-10 md:px-20 pt-20 sm:pt-44 pb-9 mb-24">
                    <div className="py-7 px-4 xs:px-10 md:px-16 text-center bg-white bg-opacity-[65%] shadow-blur backdrop-blur-[13.6px] rounded-md border-white border-[1px] flex flex-col items-center">
                        <h2 className="font-bold text-4xl sm:text-5xl mb-8">
                Exclusive discounts for members
                        </h2>
                        <p className="text-base sm:text-lg mb-8 text-secondary">
                The time is now for it to be okay to be great. People in this
                world shun people for being great. For being a bright color. For
                standing out. But the time is now to be okay to be the greatest
                you.
                        </p>
                        <Link to="/products/shop" className="mx-auto flex items-center font-semibold text-sm bg-dark text-white transition hover:bg-opacity-90 rounded-md py-3 px-6 border-[1px] border-white border-opacity-[45%]">
                            <HiGift className="mr-2 w-6 h-6" />
                Get your code
                        </Link>
                    </div>
                </div>
                {/* End Homepage Discounts Section */}
                <Footer />
            </div>
        </>
    );
};
