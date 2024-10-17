import Slider from "@/Components/Slider/Slider";
import MainLayout from "@/Layouts/MainLayout";
import AdminLogin from "@/Components/Auth/AdminLogin";
import { useState } from "react";
import UserLogin from "@/Components/Auth/UserLogin";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Login({ status, canResetPassword }) {
    const slides = [
        { image: "/img/app/slider/slide-0.png" },
        { image: "/img/app/slider/slide-1.jpg" },
        { image: "/img/app/slider/slide-2.jpg" },
    ];

    const [tab, setTab] = useState("user");

    return (
        <MainLayout>
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="flex flex-col sm:flex-row-reverse bg-white rounded-lg">
                    <div className="w-full sm:max-w-md py-9 bg-primary rounded-r-lg">
                        <div className="font-bold text-2xl text-center text-white">
                            Quote
                        </div>
                        <p className="mx-auto text-center text-white max-w-96 text-base px-4">
                            "Ilmu itu ada di mana-mana, pengetahuan di mana-mana
                            tersebar, kalau kita bersedia membaca, dan bersedia
                            mendengar." <br />- Felix Siauw
                        </p>

                        <Slider slides={slides} />
                    </div>

                    <div className="w-full sm:max-w-xl p-6">
                        <div className="flex items-center">
                            <Link className="flex-auto" href="/">
                                <ApplicationLogo className="w-20 h-8 fill-current text-gray-500" />
                            </Link>

                            <div className="flex bg-primary rounded-full border-2 border-primary bg-opacity-20">
                                <div
                                    onClick={() => setTab("user")}
                                    className={`px-6 py-1 text-xs font-bold cursor-pointer transition-all ${
                                        tab === "user"
                                            ? "bg-primary rounded-l-full text-white"
                                            : ""
                                    }`}
                                >
                                    User
                                </div>
                                <div
                                    onClick={() => setTab("admin")}
                                    className={`px-6 py-1 text-xs font-bold cursor-pointer transition-all ${
                                        tab === "admin"
                                            ? "bg-primary rounded-r-full text-white"
                                            : ""
                                    }`}
                                >
                                    Admin
                                </div>
                            </div>
                        </div>
                        <div className="font-bold mt-10 text-2xl text-center">
                            Selamat Datang
                        </div>
                        <p className="text-center text-sm max-w-96">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis non debitis quibusdam nostrum? Illo
                            odit, nisi
                        </p>

                        {tab === "user" ? (
                            <UserLogin canResetPassword={canResetPassword} />
                        ) : (
                            <AdminLogin canResetPassword={canResetPassword} />
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
