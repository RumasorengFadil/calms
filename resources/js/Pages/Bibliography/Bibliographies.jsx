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
import SearchBarLayout from "@/Layouts/SearchBarLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { memo } from "react";

export default memo(function Bibliographies({ biblios, breadcrumbs }) {
    return (
        <MainLayout>
            {console.log(biblios)}
            <div className="flex fixed min-w-full bg-light-gray max-h-screen">
                <SidebarLayout>
                    <BibliographySidebar />
                </SidebarLayout>

                <div className="flex flex-col w-full">
                    <TopbarLayout />

                    <MainContentLayout>
                        <Breadcrumbs breadcrumbs={breadcrumbs}></Breadcrumbs>
                        <SearchBarLayout>
                            <SearchBar />
                        </SearchBarLayout>

                        <BiblioTableLayout>
                            <BiblioTableHeader />
                            <BiblioTableBody biblios={biblios} />
                        </BiblioTableLayout>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
});
