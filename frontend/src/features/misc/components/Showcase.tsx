import Navbar from "../../../components/Elements/Navbar";
import { Link } from "react-router-dom";

const Showcase = () => {
    return (
        <div className="bg-showcase bg-cover bg-center bg-no-repeat mb-8">
            <div className="bg-black-cover w-full h-full">
                <div className="container text-white pt-4 -mt-4">
                    <Navbar />
                    <div className="flex flex-col items-center text-center pb-40 pt-36 xs:pb-44 xs:pt-40 md:pb-60 md:pt-56">
                        <h1 className="font-bold text-5xl mb-8">
                        The Radiance Edit
                        </h1>
                        <p className="text-lg mb-8">
                        It's time to celebrate the masterpiece that is you. For too long, we've hidden our brightest colors, blended into the background.But no more. Our latest collection is an invitation to express your unique brilliance, to stand tall and beautiful. Your greatest self awaits.
                        </p>
                        <Link to="/products/shop" className="font-semibold text-sm bg-white bg-opacity-20 transition hover:bg-opacity-40 rounded-md py-2 px-4 border-[1px] border-white border-opacity-[45%]">
              Explore
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
