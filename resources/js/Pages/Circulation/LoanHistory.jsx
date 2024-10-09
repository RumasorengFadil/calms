import CirculationSidebar from "@/Components/Sidebar/CirculationSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import PageHeader from "@/Components/PageHeader";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { memo } from "react";

export default memo(function LoanHistory({ histories }) {
    const { get, data, setData, errors, reset } = useForm({
        searchKey: "",
    });

    const handleChange = function (e) {
        setData("searchKey", e.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        get(route("loan-history.search"));
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
                                value={data.searchKey}
                                onChange={handleChange}
                                type="text"
                                name="searchKey"
                                className="mx-5 w-60 p-1"
                            />
                            <PrimaryButton
                                type="button"
                                onClick={submit}
                                className="bg-primary p-1"
                            >
                                Cari
                            </PrimaryButton>
                        </div>

                        <div className="">
                            <table className="table-auto mb-10 block mx-10 h-96 overflow-auto border-collapse border border-gray-300">
                                <thead className="bg-gray-300 sticky top-0">
                                    <tr className="">
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
                                    {histories.data.map((history,i) => (
                                        <tr className="bg-white" key = {i}>
                                            <td className="border border-gray-400 px-4 py-1 text-center">
                                                {history.member.member_id}
                                            </td>
                                            <td className="border border-gray-400 px-4 py-1">
                                                {history.member.member_name}
                                            </td>
                                            <td className="border border-gray-400 px-4 py-1">
                                            {history.item_code}
                                            </td>
                                            <td className="border border-gray-400 px-4 py-1">
                                                {history.title}
                                            </td>
                                            <td className="border border-gray-400 px-4 py-1">
                                            {history.loan_date}
                                            </td>
                                            <td className="border border-gray-400 px-4 py-1">
                                            {history.due_date}
                                            </td>
                                            <td className="border border-gray-400 px-4 py-1">
                                                {history.is_return === 1? "Selesai" : "Dipinjam"}
                                            </td>
                                            <td className="border border-gray-400 px-4 py-1">
                                                {history.last_update}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </MainContentLayout>
            </div>
        </div>
    );
});
