import CirculationSidebar from "@/Components/Sidebar/CirculationSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import PageHeader from "@/Components/PageHeader";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function LoanHistory({histories}) {
    const { get, data, setData, errors, reset } = useForm({
        memberId: " ",
    });

    const handleChange = function (e) {
        setData("memberId", e.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        get(route("circulation.create", data.memberId));
    };
    return (
        <div className="flex fixed min-w-full bg-light-gray max-h-screen">
            <SidebarLayout>
                <CirculationSidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader>Riwayat Peminjaman</PageHeader>
                    <div className="px-10 py-4 bg-blue-200">
                        Masukkan ID anggota untuk mencari data
                    </div>

                    <div>
                        <div className="flex items-center mx-10 py-6">
                            <label>ID Anggota</label>
                            <TextInput
                                value={data.memberId}
                                onChange={handleChange}
                                type="text"
                                name="memberId"
                                className="mx-5 p-1"
                            />
                            <PrimaryButton
                                type="button"
                                onClick={submit}
                                className="bg-primary p-1"
                            >
                                Cari
                            </PrimaryButton>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table-auto mx-10 border-collapse border border-gray-300">
                                <thead className="bg-gray-300">
                                    <tr>
                                        <th className="border border-gray-400 px-4 py-1">
                                            ID anggota
                                        </th>
                                        <th className="border border-gray-400 px-4 py-1">
                                            Nama anggota
                                        </th>
                                        <th className="border border-gray-400 px-4 py-1">
                                            Kode buku
                                        </th>
                                        <th className="border border-gray-400 px-4 py-1">
                                            Judul
                                        </th>
                                        <th className="border border-gray-400 px-4 py-1">
                                            Tgl peminjaman
                                        </th>
                                        <th className="border border-gray-400 px-4 py-1">
                                            Tgl pengembalian
                                        </th>
                                        <th className="border border-gray-400 px-4 py-1">
                                            Status
                                        </th>
                                        <th className="border border-gray-400 px-4 py-1">
                                            Tgl update
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border border-gray-400 px-4 py-1 text-center">
                                            1
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Ucup
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            B004
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Aku anak sehat
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            23-07-2024
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            29-07-2024
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Selesai
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            01-08-2024
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-400 px-4 py-1 text-center">
                                            2
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Jordy
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            B002
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Si Kancil
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            20-07-2024
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            31-07-2024
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Selesai
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            01-08-2024
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-400 px-4 py-1 text-center">
                                            3
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Anton
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            B001
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Sejarah Indonesia
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            27-07-2024
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            01-08-2024
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            Selesai
                                        </td>
                                        <td className="border border-gray-400 px-4 py-1">
                                            01-08-2024
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </MainContentLayout>
            </div>
        </div>
    );
}
