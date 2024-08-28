import SidebarNavGroup from "./SidebarNavGroup ";

const bibliographyLinks = [
    { name: "circulation.index", label: "Peminjaman" },
    { name: "circulation.loan-history", label: "Riwayat Peminjaman" },
    { name: "circulation.due-date-warning", label: "Due Date Warning" }
];

export default function CirculationSidebar(){

    return (
        <SidebarNavGroup links={bibliographyLinks} />
    )
}