import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";

export default function TopbarLayout({ children }) {
    const { currentRouteName } = usePage().props;

    return (
        <div className="w-full">
            <nav className=" bg-white py-5 px-10 w-full">
                <div className="flex">
                    <ul className="flex flex-auto items-center">
                        <Link
                            className={`mx-5 ${
                                currentRouteName === "dashboard"
                                    ? "text-primary"
                                    : ""
                            } text-xl font-inter`}
                            href={route("dashboard")}
                        >
                            <li className="">Dashboard</li>
                        </Link>
                        <Link
                            className={`mx-5 ${
                                currentRouteName === "bibliography"
                                    ? "text-primary"
                                    : ""
                            } text-xl font-inter`}
                            href={route("bibliography")}
                        >
                            <li className="">Pustaka</li>
                        </Link>
                        <Link
                            className={`mx-5 ${
                                currentRouteName === "circulation"
                                    ? "text-primary"
                                    : ""
                            } text-xl font-inter`}
                            href=""
                        >
                            <li className="">Peminjaman</li>
                        </Link>
                        <Link
                            className={`mx-5 ${
                                currentRouteName === "membership"
                                    ? "text-primary"
                                    : ""
                            } text-xl font-inter`}
                            href=""
                        >
                            <li className="">Keanggotaan</li>
                        </Link>
                        {children}
                    </ul>
                    <Link href={route("dashboard")}>
                        <img
                            className="w-64 min-w-32"
                            src="/img/app/logo-company.png"
                            alt=""
                        />
                    </Link>
                </div>
            </nav>
        </div>
    );
}
