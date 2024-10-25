import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import MemberLayout from "@/Layouts/MemberLayout";
import { useImagePreview } from "@/hooks/useImagePreview";
import toastUtils from "@/utils/toastUtils";
import MainLayout from "@/Layouts/MainLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
    // const { data, setData, errors, post, reset } = useForm({
    //     memberName: auth.member.member_name,
    //     birthDate: auth.member.birth_date,
    //     gender: auth.member.gender,
    //     expireDate: auth.member.expire_date,
    //     memberSinceDate: auth.member.member_since_date,
    //     memberPhone: auth.member.member_phone,
    //     memberPassword: null,
    //     passwordConfirmation: "",
    //     instName: auth.member.inst_name,
    //     memberAddress: auth.member.member_address,
    //     postalCode: auth.member.postal_code,
    //     registerDate: auth.member.register_date,
    //     pin: auth.member.pin,
    //     memberPhoto: null,
    //     memberEmail: auth.member.email,
    // });
    // const { imagePreview, handleFileChange } = useImagePreview(); // State untuk menyimpan Data URL

    // const handleChange = (e) => {
    //     setData((prevData) => ({
    //         ...prevData,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    // const submit = (e) => {
    //     e.preventDefault();

    //     post(route("profile.update"), {
    //         onSuccess: (response) => {
    //             toastUtils.showSuccess(response.props.flash);
    //         },
    //         onError: (errors) => {
    //             toastUtils.showError(errors);
    //         },
    //     });
    // };

    return (
        <MainLayout>
                <Head title="Edit Profil" />
                {/* Ngoding disini */}
                <div>Hallo mar</div>
        </MainLayout>
    );
}
