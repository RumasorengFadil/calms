import CirculationSidebar from "@/Components/Sidebar/CirculationSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import PageHeader from "@/Components/PageHeader";
import MainLayout from "@/Layouts/MainLayout";
import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs ";
import { useForm } from "@inertiajs/react";
import LoanBookSection from "@/Components/Circulation/LoanBookSection";
import BorrowBookForm from "@/Components/Circulation/BorrowBookForm";
import toastUtils from "@/utils/toastUtils";
import CurrentLoanSection from "@/Components/Circulation/CurrentLoanSection";

export default function CreateLoan({ member, breadcrumbs }) {
    const { post, errors, data, setData, reset } = useForm({
        loans: [],
        memberId : member.member_id,
        renewed : null,
        isLent : true,
        isReturn : false,
        returnDate : null,
    });

    const handleAddLoans = (loan) => {
        if (
            !data.loans.some(
                (existingLoan) => existingLoan.item.item_code === loan.item.item_code
            )
        ) {
            setData("loans", [...data.loans, loan]);
        }
    };

    const handleDeleteLoans = (itemCode) => {
        const loans = data.loans.filter((loan) => loan.item.item_code !== itemCode);

        setData("loans", loans);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("circulation.store"), {
            onSuccess: (response) => {
                // reset();
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    const [tabName, setTabname] = useState("loan");

    return (
        <MainLayout>
            {console.log(member)}
            <div className="flex fixed min-w-full bg-light-gray max-h-screen">
                <SidebarLayout>
                    <CirculationSidebar />
                </SidebarLayout>

                <div className="flex flex-col w-full">
                    <TopbarLayout />

                    <MainContentLayout>
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                        <div className="flex bg-white px-10">
                            <div className="flex-1">
                                <div className="flex py-2 border-b items-center">
                                    <p className="basis-48">Nama</p>
                                    <p className="opacity-50">
                                        {member.member_name}
                                    </p>
                                </div>
                                <div className="flex py-2 border-b items-center">
                                    <p className="basis-48">Email</p>
                                    <p className="opacity-50">
                                        {member.member_email
                                            ? member.member_email
                                            : "-"}
                                    </p>
                                </div>
                                <div className="flex py-2 border-b items-center">
                                    <p className="basis-48">Tgl Registrasi</p>
                                    <p className="opacity-50">
                                        {member.member_since_date}
                                    </p>
                                </div>
                                <div className="flex py-2 items-center">
                                    <p className="basis-48">Keterangan</p>
                                    <p className="opacity-50">
                                        {member.return_date
                                            ? member.return_date
                                            : "-"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex py-2 border-b items-center">
                                    <p className="basis-48">ID Anggota</p>
                                    <p className="opacity-50">
                                        {member.member_id}
                                    </p>
                                </div>
                                <div className="flex py-2 border-b items-center">
                                    <p className="basis-48">Status</p>
                                    <p className="opacity-50">
                                        {member.is_active
                                            ? "Aktif"
                                            : "Tidak aktif"}
                                    </p>
                                </div>
                                <div className="flex py-2 border-b items-center">
                                    <p className="basis-48">Tgl Kadarluarsa</p>
                                    <p className="opacity-50">
                                        {member.expire_date}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto">
                            {/* <!-- Tabs Navigasi --> */}
                            <div className=" pt-5 px-10">
                                <ul className="flex">
                                    <li
                                        className={`mr-2 ${
                                            tabName === "loan"
                                                ? "bg-white text-blue-600"
                                                : ""
                                        } rounded-t cursor-pointer`}
                                    >
                                        <a
                                            onClick={() => setTabname("loan")}
                                            className="inline-block px-4 py-2  hover:text-blue-600 transition ease-linear duration-150"
                                        >
                                            Pinjaman
                                        </a>
                                    </li>
                                    <li
                                        className={`mr-2 ${
                                            tabName === "currentLoan"
                                                ? "bg-white text-blue-600"
                                                : ""
                                        } rounded-t cursor-pointer`}
                                    >
                                        <a
                                            onClick={() =>
                                                setTabname("currentLoan")
                                            }
                                            className="inline-block px-4 py-2 hover:text-blue-600 transition ease-linear duration-150"
                                        >
                                            Pinjaman saat ini
                                        </a>
                                    </li>
                                    <li className="ml-auto">
                                        <PrimaryButton onClick={submit} className="bg-secondary text-white px-4 p-1 rounded-md">
                                            Selesai
                                        </PrimaryButton>
                                    </li>
                                </ul>
                            </div>
                            {tabName === "loan" && (
                                <div>
                                    <BorrowBookForm onAdded = {handleAddLoans} />
                                    <LoanBookSection data = {data.loans} onDeleted={handleDeleteLoans} />
                                </div>
                            )}

                            {/* <!-- Tabel Data Pinjaman --> */}
                            {tabName === "currentLoan" && (
                               <CurrentLoanSection data={member} />
                            )}
                        </div>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
}
