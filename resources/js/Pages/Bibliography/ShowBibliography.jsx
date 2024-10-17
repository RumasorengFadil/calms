import BiblioList from "@/Components/Biblio/BiblioList";
import BiblioTableBody from "@/Components/Biblio/BiblioTableBody";
import BiblioTableHeader from "@/Components/Biblio/BiblioTableHeader";
import BiblioTableLayout from "@/Components/Biblio/BiblioTableLayout";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs ";
import PageHeader from "@/Components/PageHeader";
import SearchBar from "@/Components/SearchBar";
import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import TextInput from "@/Components/TextInput";
import MainContentLayout from "@/Layouts/MainContentLayout";
import MainLayout from "@/Layouts/MainLayout";
import MemberLayout from "@/Layouts/MemberLayout";
import SearchBarLayout from "@/Layouts/SearchBarLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { memo } from "react";

export default memo(function ShowBibliography({ auth }) {
    return (
        <MemberLayout member={auth.member}>
            {/* Coding disini */}
        </MemberLayout>
    );
});
