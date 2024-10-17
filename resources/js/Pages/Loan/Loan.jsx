import CurrentLoanSection from "@/Components/Circulation/CurrentLoanSection";
import MemberLayout from "@/Layouts/MemberLayout";
import calcDayDifference from "@/utils/calcDayDifferent";
import React, { useState } from "react";

const LoanList = ({ auth, member }) => {
    // State untuk tab dan data peminjaman
    const [activeTab, setActiveTab] = useState("current");

    const loans = [
        {
            id: 1,
            code: "B004",
            title: "Aku anak sehat",
            loanDate: "23-07-2024",
            returnDate: "29-07-2024",
            status: "Selesai",
        },
        // Tambahkan data buku lainnya di sini
    ];

    return (
        <>
            {/* Header */}
            <MemberLayout member={auth.member}>
                {/* Section Judul */}
                <section className="bg-primary text-white py-6">
                    <h1 className="text-2xl font-semibold text-center">
                        Daftar Pinjaman
                    </h1>
                </section>

                {/* Tabs */}
                <div className="mt-6 container mx-auto">
                    <div className="flex justify-center space-x-4 border-b border-gray-300">
                        <button
                            className={`py-2 px-4 font-semibold ${
                                activeTab === "current"
                                    ? "border-b-2 border-teal-500 text-teal-500"
                                    : "text-gray-600"
                            }`}
                            onClick={() => setActiveTab("current")}
                        >
                            Pinjaman saat ini
                        </button>
                        <button
                            className={`py-2 px-4 font-semibold ${
                                activeTab === "history"
                                    ? "border-b-2 border-teal-500 text-teal-500"
                                    : "text-gray-600"
                            }`}
                            onClick={() => setActiveTab("history")}
                        >
                            Histori Peminjaman
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto mt-6">
                        {activeTab === "current" ? (
                            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Kode buku
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Judul buku
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Tgl peminjaman
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Tempo pengembalian
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Denda
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {member.loans.map((loan) =>
                                        !loan.is_return ? (
                                            <tr
                                                key={loan.loan_id}
                                                className="border-t"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {loan.item_code}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {loan.history.title}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {loan.loan_date}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {loan.due_date}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span
                                                        className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${
                                                            loan.is_return
                                                                ? "bg-green-500"
                                                                : "bg-red-500"
                                                        }`}
                                                    >
                                                        {loan.is_return
                                                            ? "Selesai"
                                                            : "Belum"}
                                                    </span>
                                                </td>
                                                <td
                                                    className={`px-6 py-4 text-sm text-gray-800 ${
                                                        calcDayDifference(
                                                            loan.due_date
                                                        ) < 0
                                                            ? "text-red-500"
                                                            : ""
                                                    }`}
                                                >
                                                    {calcDayDifference(
                                                        loan.due_date
                                                    ) < 0
                                                        ? `Rp. ${Math.abs(
                                                              calcDayDifference(
                                                                  loan.due_date
                                                              ) * 500
                                                          )}`
                                                        : "Rp. -"}
                                                </td>
                                            </tr>
                                        ) : (
                                            ""
                                        )
                                    )}
                                </tbody>
                            </table>
                        ) : (
                            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Kode buku
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Judul buku
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Tgl peminjaman
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Tempo pengembalian
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {member.loans.map((loan) =>
                                        loan.is_return ? (
                                            <tr
                                                key={loan.loan_id}
                                                className="border-t"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {loan.item_code}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {loan.history.title}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {loan.loan_date}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {loan.due_date}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span
                                                        className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${
                                                            loan.is_return
                                                                ? "bg-green-500"
                                                                : "bg-red-500"
                                                        }`}
                                                    >
                                                        {loan.is_return
                                                            ? "Selesai"
                                                            : "Belum"}
                                                    </span>
                                                </td>
                                            </tr>
                                        ) : (
                                            ""
                                        )
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </MemberLayout>
        </>
    );
};

export default LoanList;
