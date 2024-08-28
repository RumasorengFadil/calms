import SidebarNavGroup from "./SidebarNavGroup ";

const membershipLinks = [
    { name: "memberships.index", label: "Daftar Anggota" },
    { name: "memberships.create", label: "Tambah Anggota" },
];

export default function MembershipSidebar(){

    return (
        <SidebarNavGroup links={membershipLinks} />
    )
}