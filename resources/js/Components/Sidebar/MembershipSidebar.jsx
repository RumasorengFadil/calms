import SidebarNavGroup from "./SidebarNavGroup ";

const membershipLinks = [
    { name: "membership.index", label: "Daftar Anggota" },
    { name: "membership.create", label: "Tambah Anggota" },
];

export default function MembershipSidebar(){

    return (
        <SidebarNavGroup links={membershipLinks} />
    )
}