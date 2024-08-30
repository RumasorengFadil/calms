import MembershipSidebar from "@/Components/Sidebar/MembershipSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import PageHeader from "@/Components/PageHeader";

export default function CreateMember({}) {
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <MembershipSidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader>Tambah Anggota</PageHeader>
                </MainContentLayout>
            </div>
        </div>
    );
}
