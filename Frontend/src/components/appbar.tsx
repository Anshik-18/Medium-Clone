import { Link } from "react-router-dom";
import { Avtar } from "./Blogcard";

export const Appbar = () => {
    return (
        <div className="py-3 border-b flex justify-between items-center px-10">
            {/* Left Section - Logo */}
            <Link to="/blogs">
                <div className="cursor-pointer font-bold text-lg">
                    Medium
                </div>
            </Link>

            {/* Right Section - Button + Avatar */}
            <div className="flex items-center gap-4">
                <Link to="/publish">
                    <button
                        type="button"
                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none
                        focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center"
                    >
                        New
                    </button>
                </Link>

                <Avtar authorname="Anshik" />
            </div>
        </div>
    );
};
