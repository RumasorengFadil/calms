import React, { useState } from "react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, Link, useForm } from "@inertiajs/react";
import MemberLayout from "@/Layouts/MemberLayout";
import { useImagePreview } from "@/hooks/useImagePreview";
import toastUtils from "@/utils/toastUtils";
import MainLayout from "@/Layouts/MainLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const { data, setData, errors, post, reset } = useForm({
        memberName: auth.member.member_name,
        birthDate: auth.member.birth_date,
        gender: auth.member.gender,
        expireDate: auth.member.expire_date,
        memberSinceDate: auth.member.member_since_date,
        memberPhone: auth.member.member_phone,
        memberPassword: null,
        passwordConfirmation: "",
        instName: auth.member.inst_name,
        memberAddress: auth.member.member_address,
        postalCode: auth.member.postal_code,
        registerDate: auth.member.register_date,
        pin: auth.member.pin,
        memberPhoto: null,
        memberEmail: auth.member.email,
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
            <MemberLayout className={"bg-white"} member={auth.member}>
                <Head title="Edit Profil" />

                {/* Bagian Profil */}
                <div className="p-8 bg-white max-w-4xl mx-auto mt-6 rounded-lg">
                    <div className="flex items-center space-x-6 mb-6">
                        {/* Profile Picture */}
                        <img
                            src={
                                imagePreview
                                    ? imagePreview
                                    : auth.member.member_photo_path
                                    ? `/storage/uploads/img/members/photo/${auth.member.member_photo_path}`
                                    : `/img/memberships/member-default-picture.png`
                            }
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-2xl font-bold">
                                {auth.member.member_name}
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
                                            setData("memberPhoto", file)
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Inputs */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700">Nama</label>
                            <input
                                type="text"
                                name="memberName"
                                value={data.memberName}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Status Keanggotaan
                            </label>
                            <select
                                name="membershipStatus"
                                value={
                                    auth.member.is_active
                                        ? "Aktif"
                                        : "Tidak aktif"
                                }
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                disabled
                            >
                                <option value="Aktif">Aktif</option>
                                <option value="Non-aktif">Non-aktif</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">NIS</label>
                            <input
                                type="text"
                                name="pin"
                                value={data.pin}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Tempat / Tgl Lahir
                            </label>
                            <input
                                type="date"
                                name="birthDate"
                                value={data.birthDate}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="memberEmail"
                                value={data.memberEmail}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Aktif Sampai
                            </label>
                            <input
                                type="date"
                                name="expireDate"
                                value={data.expireDate}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                No. Telepon
                            </label>
                            <input
                                type="text"
                                name="memberPhone"
                                value={data.memberPhone}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="memberPassword"
                                value={data.memberPassword}
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
                        <button onClick={() => history.back()} className="px-6 py-2 bg-gray-300 text-gray-800 rounded">
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
            </MemberLayout>
        </MainLayout>
    );
}
