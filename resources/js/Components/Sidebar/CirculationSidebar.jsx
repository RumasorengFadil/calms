import SidebarNavGroup from "./SidebarNavGroup ";

const bibliographyLinks = [
    { name: "circulation.index", label: "Peminjaman" },
    { name: "circulation.loan-history.index", label: "Riwayat Peminjaman" },
    // { name: "circulation.edit", label: "Due Date Warning" }
];

export default function CirculationSidebar(){

    return (
        <SidebarNavGroup links={bibliographyLinks} />
    )
}