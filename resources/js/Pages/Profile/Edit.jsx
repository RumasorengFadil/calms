import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import MemberLayout from "@/Layouts/MemberLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <MemberLayout
            member={auth.member}
        >
        {/* Ngoding di bawah sini  */}


        </MemberLayout>
    );
}
