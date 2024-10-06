import { memo } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import toastUtils from "@/utils/toastUtils";

export default memo(function BorrowBookForm ({
    children,
    className = "",
    onAdded,
    // props,
}) {
    const { post, errors, data, setData, reset } = useForm({
        itemCode: "",
    });
    // const { props } = usePage();
    // const item = props.flash.item?.item;

    const submit = (e) => {
        e.preventDefault();

        post(route("items.search"), {
            onSuccess: (response) => {
                const loanDate = new Date(); // Tanggal hari ini
                const dueDate = new Date(loanDate); // Salin loanDate ke dueDate
                dueDate.setDate(dueDate.getDate() + 7); // Tambah 7 hari ke dueDate

                onAdded({
                    item: response.props.flash.item?.item,
                    loanDate: loanDate.toLocaleDateString('en-CA'),
                    dueDate: dueDate.toLocaleDateString('en-CA'),
                });
                toastUtils.showSuccess(response.props.flash);
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };
    return (
        <div className="bg-white px-10">
            {/* <!-- Input dan Tombol Cari --> */}
            <div className="flex items-center py-8">
                <label htmlFor="kodeBuku">Kode Buku</label>
                <TextInput
                    type="text"
                    value={data.itemCode}
                    onChange={(e) => setData("itemCode", e.target.value)}
                    id="kodeBuku"
                    className="border border-gray-300 mx-3 rounded-md px-3 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Masukkan Kode Buku"
                />
                <PrimaryButton
                    onClick={submit}
                    className="bg-teal-500 text-white rounded-md"
                >
                    Pinjam
                </PrimaryButton>
            </div>
        </div>
    );
});
