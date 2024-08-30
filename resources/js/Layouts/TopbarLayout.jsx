import { Link, usePage } from "@inertiajs/react";

export default function TopbarLayout({ children }) {
    const { baseRouteName } = usePage().props;

    return (
        <div className="w-full">
            <nav className=" bg-white py-5 px-10 w-full">
                <div className="flex">
                    <ul className="flex flex-auto items-center">
                        <Link
                            className={`mx-5 ${
                                baseRouteName === "dashboard"
                                    ? "text-primary"
                                    : ""
                            } text-xl font-inter`}
                            href={route("dashboard.index")}
                        >
                            <li className="">Dashboard</li>
                        </Link>
                        <Link
                            className={`mx-5 ${
                                baseRouteName === "bibliographies"
                                    ? "text-primary"
                                    : ""
                            } text-xl font-inter`}
                            href={route("bibliographies.index")}
                        >
                            <li className="">Pustaka</li>
                        </Link>
                        <Link
                            className={`mx-5 ${
                                baseRouteName === "circulation"
                                    ? "text-primary"
                                    : ""
                            } text-xl font-inter`}
                            href={route("circulation.index")}
                        >
                            <li className="">Peminjaman</li>
                        </Link>
                        <Link
                            className={`mx-5 ${
                                baseRouteName === "membership"
                                    ? "text-primary"
                                    : ""
                            } text-xl font-inter`}
                            href= {route("membership.index")}
                        >
                            <li className="">Keanggotaan</li>
                        </Link>
                        {children}
                    </ul>
                    <Link href={route("dashboard.index")}>
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
