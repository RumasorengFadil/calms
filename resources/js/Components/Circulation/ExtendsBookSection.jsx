import { memo } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import toastUtils from "@/utils/toastUtils";

export default memo(function ReturnBookSection({ data }) {
    const { patch, errors, setData, reset } = useForm({
        loan: data,
        memberId: data.member_id,
        renewed: 1,
        isLent: true,
        isReturn: false,
        returnDate: new Date().toLocaleDateString("en-CA"),
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("circulation.update", data.loan_id), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash)
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };
    return (
        <div className="basis-2/5 flex justify-center">
            {data.renewed ? (
                data.renewed
            ) : (
                <PrimaryButton
                    name="renewed"
                    value="1"
                    onClick={submit}
                    className="bg-green-500 text-white rounded-md"
                >
                    Tambah Durasi
                </PrimaryButton>
            )}
        </div>
    );
});
