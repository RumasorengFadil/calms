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
import Autocomplete from "@/Components/Autocomplete";
import MemberAutocomplete from "@/Components/Autocomplete/MemberAutoComplete";

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

                    <MainContentLayout className="min-h-screen">
                        <PageHeader>Peminjaman</PageHeader>

                        <div className="px-10 py-4 bg-blue-200">
                            Masukkan ID anggota untuk melakukan peminjaman
                        </div>

                        <div>
                            <div className="flex items-center mx-10 py-10 relative">
                                <label>ID Anggota</label>
                                {/* <TextInput
                                    value={data.memberId}
                                    onChange={handleChange}
                                    type="text"
                                    name="memberId"
                                    className="mx-5 p-1"
                                /> */}

                                <MemberAutocomplete 
                                    value={data.memberId}
                                    onChange={handleChange}
                                    type="text"
                                    name="memberId"
                                    className="mx-5 p-1 z-50 absolute"
                                    route={route("membership.search")}
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
