import CirculationSidebar from "@/Components/Sidebar/CirculationSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { useForm, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";
import MainLayout from "@/Layouts/MainLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import toastUtils from "@/utils/toastUtils";
import InputError from "@/Components/InputError";
import { useEffect } from "react";

export default function Circulation({}) {
    const { get, data, setData, errors, reset } = useForm({
        memberId: " ",
    });
    const { props } = usePage();

    const handleChange = function (e) {
        setData("memberId", e.target.value);
    };

    useEffect(() => {
        if (props.flash.error) {
            toastUtils.showError(props.flash);
        } else {
            toastUtils.showSuccess(props.flash);
        }
    }, [props]);

    const submit = (e) => {
        e.preventDefault();
        get(route("circulation.create", data.memberId));
    };
    return (
        <MainLayout>
            <div className="flex fixed min-w-full bg-light-gray max-h-screen">
                <SidebarLayout>
                    <CirculationSidebar />
                </SidebarLayout>

                <div className="flex flex-col w-full">
                    <TopbarLayout />

                    <MainContentLayout>
                        <PageHeader>Peminjaman</PageHeader>

                        <div className="px-10 py-4 bg-blue-200">
                            Masukkan ID anggota untuk melakukan peminjaman
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
                        </div>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
}
