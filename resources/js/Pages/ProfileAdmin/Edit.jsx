import React, { useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import MemberLayout from "@/Layouts/MemberLayout";
import { useImagePreview } from "@/hooks/useImagePreview";
import toastUtils from "@/utils/toastUtils";
import MainLayout from "@/Layouts/MainLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const { data, setData, errors, post, reset } = useForm({
        username: auth.user.username,
        realName: auth.user.real_name,
        email: auth.user.email,
        image: null,
        password: null,
        passwordConfirmation: "",
    });
    const { imagePreview, handleFileChange } = useImagePreview(); // State untuk menyimpan Data URL

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("profile.update"), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    return (
        <MainLayout>
            <Head title="Edit Profil" />

            {/* Header */}
            <div className="w-full bg-primary p-4 text-white text-lg font-bold">
                Admin
            </div>

            {/* Tombol Back */}
            <div className="w-full flex justify-start p-4">
                <button
                    onClick={() => window.history.back()}
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                >
                    Back
                </button>
            </div>

            {/* Bagian Profil */}
            <div className="p-8 bg-white max-w-4xl mx-auto mt-6 rounded-lg">
                <div className="flex items-center space-x-6 mb-6">
                    {/* Profile Picture */}
                    <img
                        src={
                            imagePreview
                                ? imagePreview
                                : auth.user.image
                                ? `/storage/uploads/img/members/photo/${auth.user.image}`
                                : `/img/memberships/member-default-picture.png`
                        }
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">
                            {auth.user.real_name}
                        </h2>
                        <div className="flex space-x-4 mt-2">
                            <label
                                type="submit"
                                htmlFor="file-upload"
                                className="px-4 py-2 cursor-pointer bg-gray-300 text-gray-800 rounded"
                            >
                                Browse
                            </label>
                            {/* <button className="px-4 py-2 bg-red-500 text-white rounded">
                                    Hapus
                                </button> */}
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                    handleFileChange(e, (file) =>
                                        setData("image", file)
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Real Name</label>
                        <input
                            type="text"
                            name="realName"
                            value={data.realName}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div></div>
                    <div>
                        <label className="block text-gray-700">
                            Konfirmasi Password
                        </label>
                        <input
                            type="password"
                            name="passwordConfirmation"
                            value={data.passwordConfirmation}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-6 space-x-4">
                    {/* Button Batal */}
                    <button
                        onClick={() => history.back()}
                        className="px-6 py-2 bg-gray-300 text-gray-800 rounded"
                    >
                        Batal
                    </button>

                    {/* Button Simpan */}
                    <button
                        onClick={submit}
                        className="px-6 py-2 bg-blue-500 text-white rounded"
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </MainLayout>
    );
}

// <MainLayout>
//     <Head title="Edit Profil" />

//     <div className="min-h-screen bg-white flex flex-col items-center">
//         {/* Header */}
//         <div className="w-full bg-teal-500 p-4 text-white text-lg font-bold">Admin</div>

//         {/* Tombol Back */}
// <div className="w-full flex justify-start p-4">
//     <button
//         onClick={() => window.history.back()}
//         className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
//     >
//         Back
//     </button>
// </div>

//         {/* Profile Section */}
//         <div className="bg-white rounded-lg p-6 w-4/5">
//             <div className="flex items-center mb-6">
//                 <div className="relative">
//                     <img
//                         className="w-24 h-24 rounded-full object-cover"
//                         src="img/memberships/member-default-picture.png"
//                         alt="Profile"
//                     />
//                 </div>
//                 <div className="ml-4">
//                     <h2 className="text-2xl font-semibold">Freya</h2>
//                     <div className="flex space-x-4 mt-2">
//                         <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Browse</button>
//                     </div>
//                 </div>
//             </div>

//             {/* Form Section */}
//             <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Nama</label>
//                     <input
//                         type="text"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                         defaultValue="Freya"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Status Keanggotaan</label>
//                     <select
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                     >
//                         <option>Aktif</option>
//                         <option>Nonaktif</option>
//                     </select>
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">NIS</label>
//                     <input
//                         type="text"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                         defaultValue="123456"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Aktif Sampai</label>
//                     <input
//                         type="text"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                         defaultValue="30 Desember 2025"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Email</label>
//                     <input
//                         type="email"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                         defaultValue="Flamingo@gmail.com"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Tempat / Tgl lahir</label>
//                     <input
//                         type="text"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                         defaultValue="Jakarta, 00 Januari 2024"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">No. Telepon</label>
//                     <input
//                         type="text"
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                         defaultValue="088123456789"
//                     />
//                 </div>

//             </div>

//             {/* Button Section */}
//             <div className="flex justify-end space-x-4">
//                 <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Batal</button>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">Simpan</button>
//             </div>
//         </div>
//     </div>
// </MainLayout>
