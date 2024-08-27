import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function TopbarLayout({ children }) {
    return (
        <div className="w-full">
            <nav className=" bg-white py-5 px-10 w-full">
                <div className="flex">
                    <ul className="flex flex-auto items-center">
                        <a
                            className="mx-5 text-primary text-xl font-inter"
                            href=""
                        >
                            <li className="">Dashboard</li>
                        </a>
                        <a className="mx-5 text-xl font-inter" href="">
                            <li className="">Pustaka</li>
                        </a>
                        <a className="mx-5 text-xl font-inter" href="">
                            <li className="">Peminjaman</li>
                        </a>
                        <a className="mx-5 text-xl font-inter" href="">
                            <li className="">Keanggotaan</li>
                        </a>
                        {children}
                    </ul>
                    <a href="">
                        <img
                            className="w-64"
                            src="/img/app/logo-company.png"
                            alt=""
                        />
                    </a>
                </div>
            </nav>
        </div>
    );
}
