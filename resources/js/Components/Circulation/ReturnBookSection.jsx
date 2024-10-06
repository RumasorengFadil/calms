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
        memberId : data.member_id,
        renewed : null,
        isLent : true,
        isReturn : true,
        returnDate : (new Date()).toLocaleDateString('en-CA'),
    });
    {console.log(data)}
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
        <div className="basis-1/5 flex justify-center">
            <PrimaryButton
                name="isReturn"
                value="true"
                onClick={submit}
                className="bg-red-500 text-white rounded-md"
            >
                Selesai
            </PrimaryButton>
        </div>
    );
});
