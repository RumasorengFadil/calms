import MembershipSidebar from "@/Components/Sidebar/MembershipSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import PageHeader from "@/Components/PageHeader";

export default function EditMember({}) {
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <MembershipSidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader>Edit Anggota</PageHeader>
                </MainContentLayout>
            </div>
        </div>
    );
}
