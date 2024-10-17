import React, { useState } from 'react';
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import MemberLayout from "@/Layouts/MemberLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const [profile, setProfile] = useState({
        name: 'Flamingo',
        nis: '123456',
        email: 'Flamingo@gmail.com',
        phone: '088123456789',
        membershipStatus: 'Aktif',
        birthPlaceDate: 'Jakarta, 00 Januari 2024',
        activeUntil: '30 Desember 2025',
        password: '********',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = () => {
        // Logic untuk menyimpan profil
        console.log('Data profil disimpan:', profile);
    };

    return (
        <MemberLayout className={"bg-white"} member={auth.member}>
            <Head title="Edit Profil" />

            {/* Bagian Profil */}
            <div className="p-8 bg-white max-w-4xl mx-auto mt-6 rounded-lg">
                <div className="flex items-center space-x-6 mb-6">
                    {/* Profile Picture */}
                    <img
                        src="/img/users/user-profile-picture.png"
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">{profile.name}</h2>
                        <div className="flex space-x-4 mt-2">
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded">Browse</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded">Hapus</button>
                        </div>
                    </div>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700">Nama</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Status Keanggotaan</label>
                        <select
                            name="membershipStatus"
                            value={profile.membershipStatus}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        >
                            <option value="Aktif">Aktif</option>
                            <option value="Non-aktif">Non-aktif</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">NIS</label>
                        <input
                            type="text"
                            name="nis"
                            value={profile.nis}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Tempat / Tgl Lahir</label>
                        <input
                            type="text"
                            name="birthPlaceDate"
                            value={profile.birthPlaceDate}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Aktif Sampai</label>
                        <input
                            type="text"
                            name="activeUntil"
                            value={profile.activeUntil}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">No. Telepon</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-6 space-x-4">
                    {/* Button Logout */}
                    <button
                        onClick={() => {
                            // Logic untuk logout, misalnya panggil Inertia logout route
                            console.log("User logged out");
                        }}
                        className="px-6 py-2 bg-red-500 text-white rounded"
                    >
                        Logout
                    </button>

                    {/* Button Batal */}
                    <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded">
                        Batal
                    </button>


                    {/* Button Simpan */}
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-blue-500 text-white rounded"
                    >
                        Simpan
                    </button>
                </div>

            </div>

        </MemberLayout>
    );
}
