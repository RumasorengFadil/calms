import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function SidebarLayout({ children }) {
    return (
        <div className="bg-light-gray min-h-screen">
            <nav className="w-72 bg-primary min-h-screen">
                <div className="flex p-10 items-center justify-center">
                    <img className="w-24 h-24 mr-6 bg-white p-1 rounded-full" src="/img/users/user-profile-picture.png"></img>
                    <p className="text-xl font-inter font-bold text-center">Admin <br /> <span className="font-normal">Jonas</span></p>
                </div>
                <div className="border-y border-opacity-20 border-black pt-6 pb-6">
                    <ul>
                       {children}
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}
