import SidebarNavGroup from "./SidebarNavGroup ";

const bibliographyLinks = [
    { name: "circulation.index", label: "Peminjaman" },
    { name: "loan-history.index", label: "Riwayat Peminjaman" },
    { name: "due-date-warning.index", label: "Due Date Warning" }
];

export default function CirculationSidebar(){

    return (
        <SidebarNavGroup links={bibliographyLinks} />
    )
}