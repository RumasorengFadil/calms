import { memo } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import toastUtils from "@/utils/toastUtils";
import ReturnBookSection from "./ReturnBookSection";
import ExtendsBookSection from "./ExtendsBookSection";

export default memo(function CurrentLoanSection({ data }) {
    const isOverdue = (loanDate, dueDate) => {
        const today = new Date().setHours(0, 0, 0, 0);
        const due = new Date(dueDate).setHours(0, 0, 0, 0);
        return today > due;
    };

    return (
        <div className="overflow-x-auto bg-white">
            <div id="header" className="flex border-y py-2 mx-7">
                <div className="basis-1/5 text-center">Kembalikan</div>
                <div className="basis-2/5 text-center">Tambah Durasi</div>
                <div className="basis-1/3 px-4">Kode Buku</div>
                <div className="basis-1/2">Judul</div>
                <div className="basis-1/3">Tgl Peminjaman</div>
                <div className="basis-1/3">Tgl Pengembalian</div>
            </div>

            <div className="" id="body">
                {data.loans.map(
                    (loan, i) =>
                        !loan.is_return && (
                            <div
                                key={i}
                                className={`flex px-7 ${
                                    isOverdue(loan.loan_date, loan.due_date)
                                        ? "bg-red-200"
                                        : ""
                                } items-center border-y py-2`}
                            >
                                <ReturnBookSection data={loan} />

                                <ExtendsBookSection data={loan} />
                                <div className="basis-1/3 px-4">
                                    {loan.item_code}
                                </div>
                                <div className="basis-1/2">
                                    {loan.history.title}
                                </div>
                                <div className="basis-1/3">
                                    {loan.loan_date}
                                </div>
                                <div className="basis-1/3">{loan.due_date}</div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
});
