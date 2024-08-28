import SidebarNavGroup from "./SidebarNavGroup ";

const bibliographyLinks = [
    { name: "bibliographies.index", label: "Daftar Pustaka" },
    { name: "bibliographies.create", label: "Tambah Pustaka" },
    { name: "bibliographies.edit", label: "Edit Pustaka" }
];

export default function BibliographySidebar(){

    return (
        <SidebarNavGroup links={bibliographyLinks} />
    )
}