import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function Edit({ auth }) {
    return (
        <MainLayout>
            <Head title="Edit Profil" />

            <div className="min-h-screen bg-white flex flex-col items-center">
                {/* Header */}
                <div className="w-full bg-teal-500 p-4 text-white text-lg font-bold">Admin</div>

                {/* Tombol Back */}
                <div className="w-full flex justify-start p-4">
                    <button 
                        onClick={() => window.history.back()} 
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                    >
                        Back
                    </button>
                </div>

                {/* Profile Section */}
                <div className="bg-white rounded-lg p-6 w-4/5">
                    <div className="flex items-center mb-6">
                        <div className="relative">
                            <img
                                className="w-24 h-24 rounded-full object-cover"
                                src="img/memberships/member-default-picture.png"
                                alt="Profile"
                            />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold">Freya</h2>
                            <div className="flex space-x-4 mt-2">
                                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Browse</button>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nama</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                defaultValue="Freya"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Status Keanggotaan</label>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            >
                                <option>Aktif</option>
                                <option>Nonaktif</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">NIS</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                defaultValue="123456"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Aktif Sampai</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                defaultValue="30 Desember 2025"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                defaultValue="Flamingo@gmail.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Tempat / Tgl lahir</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                defaultValue="Jakarta, 00 Januari 2024"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">No. Telepon</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                defaultValue="088123456789"
                            />
                        </div>

                    </div>

                    {/* Button Section */}
                    <div className="flex justify-end space-x-4">
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Batal</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Simpan</button>
                    </div>
                </div>
            </div>  
        </MainLayout>
    );
}
