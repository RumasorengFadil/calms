import { memo } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import toastUtils from "@/utils/toastUtils";

export default memo(function LoanBookSection({ data, onDeleted }) {
    return (
        <div className="bg-white px-10">
            {/* <!-- Tabel Data Pinjaman --> */}
            <div className="overflow-x-auto">
                <div id="header" className="flex border-y py-2">
                    <div className="basis-1/5 text-center">Hapus</div>
                    <div className="basis-1/3 px-4">Kode Buku</div>
                    <div className="basis-1/2">Judul</div>
                    <div className="basis-2/5">Tanggal Peminjaman</div>
                    <div className="basis-2/5">Tanggal Pengembalian</div>
                </div>

                <div id="body">
                    {data.map((loan,i) => (
                        <div key={i} className="flex items-center border-y py-2">
                            <div className="basis-1/5 flex justify-center">
                                <PrimaryButton
                                    onClick={() =>
                                        onDeleted(loan.item.item_code)
                                    }
                                    className="bg-red-500 text-white rounded-md"
                                >
                                    Hapus
                                </PrimaryButton>
                            </div>
                            <div className="basis-1/3 px-4">
                                {loan.item.item_code}
                            </div>
                            <div className="basis-1/2">
                                {loan.item.biblio.title}
                            </div>
                            <div className="basis-2/5">{loan.loanDate}</div>
                            <div className="basis-2/5">{loan.dueDate}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});
