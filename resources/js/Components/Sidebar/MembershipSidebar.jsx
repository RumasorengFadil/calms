import SidebarNavGroup from "./SidebarNavGroup ";

const membershipLinks = [
    { name: "memberships.index", label: "Daftar Anggota" },
    // { name: "Memberships.loan-history", label: "Tambah Anggota" },
];

export default function MembershipSidebar(){

    return (
        <SidebarNavGroup links={membershipLinks} />
    )
}