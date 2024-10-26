import ApplicationLogo from "@/Components/ApplicationLogo";
import SidebarNavLink from "@/Components/Sidebar/SidebarNavLink";
import { Link, usePage } from "@inertiajs/react";
import { memo } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

export default memo(function SidebarLayout({ children }) {
    const { user } = usePage().props.auth;
    return (
        <div className="">
            <nav className="w-72 bg-primary min-h-screen">
                <div className="flex p-10 items-center justify-center">
                    <img
                        className="w-24 h-24 mr-6 bg-white p-1 rounded-full"
                        src={
                            user.image
                                ? `/storage/uploads/img/members/photo/${user.image}`
                                : `/img/memberships/member-default-picture.png`
                        }
                    ></img>
                    <p className="text-xl font-inter font-bold text-center">
                        Admin <br />{" "}
                        <span className="font-normal">{user.real_name}</span>
                    </p>
                </div>
                <div className="border-y border-opacity-20 border-black pt-6 pb-6">
                    <ul>{children}</ul>
                </div>

                {/* <div className="absolute bottom-6">
                    <SidebarNavLink className="flex shadow-lg items-end bg-red-500" href={route("logout")}>
                        <BiLogOutCircle size={24} className="mr-2" />
                        
                        Logout
                    </SidebarNavLink>
                </div> */}
                <div className="absolute bottom-6 group">
                    {/* Tombol Dropdown */}
                    <div className="flex w-max items-center space-x-2 mb-1 text-xl cursor-pointer text-white p-2 rounded-r-full font-semibold">
                        <IoSettingsOutline size={24} className="mr-2" />
                        Settings
                        <FaChevronDown
                            className="group-hover:-rotate-180 transition-all"
                            size={16}
                        />
                    </div>

                    {/* <!-- Konten Dropdown --> */}
                    <div class="absolute top-0 -translate-y-full text-base right-0 w-max bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                        <Link
                            href={route("profile.edit")}
                            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Ubah Profile
                        </Link>
                        {/* <Link
                            href={route("profile.edit")}
                            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Ubah Password
                        </Link> */}
                        <Link
                            href={route("logout")}
                            class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            <BiLogOutCircle
                                size={20}
                                className="mr-2 text-red-500"
                            />
                            <p className="text-red-500">Logout</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
});
