import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { BiLogOutCircle } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";

export default function MemberLayout({
    member,
    greeting,
    className,
    children,
}) {
    const { baseRouteName } = usePage().props;

    return (
        <div className={"min-h-screen bg-gray-100 " + className}>
            <header
                style={{
                    backgroundImage: "url('/img/common/library-picture.png')",
                    backgroundPosition: "center",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            >
                <div className="flex justify-between items-center px-5 py-10">
                    <Link className="" href="/">
                        <ApplicationLogo className="w-32 h-8 fill-current text-gray-500" />
                    </Link>
                    <nav className="flex items-center space-x-8 text-lg">
                        <Link
                            href="/"
                            className={`${
                                baseRouteName === "index" ? "font-semibold" : ""
                            }   hover:text-gray-700`}
                        >
                            Beranda
                        </Link>

                        {member && (
                            <>
                                <div className="relative inline-block text-left group">
                                    {/* Tombol Dropdown */}
                                    <div className="flex items-center space-x-2 cursor-pointer">
                                        <img
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                            src={
                                                member.member_photo_path
                                                    ? `/storage/uploads/img/members/photo/${member.member_photo_path}`
                                                    : `/img/memberships/member-default-picture.png`
                                            }
                                            alt=""
                                        />
                                        <FaChevronDown
                                            className="group-hover:-rotate-180 transition-all"
                                            size={16}
                                        />
                                    </div>

                                    {/* <!-- Konten Dropdown --> */}
                                    <div className="pt-2">
                                        <div class="absolute text-base right-0 w-max bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                            <Link
                                                href={route("loan.index")}
                                                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Daftar Pinjaman
                                            </Link>
                                            <Link
                                                href={route("profile.edit")}
                                                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                href={route("user.logout")}
                                                class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                <BiLogOutCircle
                                                    size={20}
                                                    className="mr-2 text-red-500"
                                                />
                                                <p className="text-red-500">
                                                    Logout
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {!member && (
                            <Link href="/login" className="hover:text-gray-700">
                                Login
                            </Link>
                        )}

                        {/* <Link href="/profil" className="text-gray-600 hover:text-gray-800">Profil</Link> */}
                    </nav>
                </div>

                {greeting && (
                    <h1 className="text-3xl font-bold text-center py-14">
                        {greeting}
                    </h1>
                )}
            </header>

            <div className="w-full ">{children}</div>
        </div>
    );
}
