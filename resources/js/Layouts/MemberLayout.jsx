import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";

export default function MemberLayout({ member, greeting, children }) {
    const { baseRouteName } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100">
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
                    <nav className="flex space-x-8 text-lg">
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
                                <Link
                                    href="/loan"
                                    className={`${
                                        baseRouteName === "loan"
                                            ? "font-semibold"
                                            : ""
                                    }   hover:text-gray-700`}
                                >
                                    Daftar Pinjaman
                                </Link>
                                <Link
                                    href="/loan"
                                    className={`${
                                        baseRouteName === "profile"
                                            ? "font-semibold"
                                            : ""
                                    }   hover:text-gray-700`}
                                >
                                    Profile
                                </Link>
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
