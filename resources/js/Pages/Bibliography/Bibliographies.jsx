import BiblioList from "@/Components/Biblio/BiblioList";
import BiblioListLayout from "@/Components/Biblio/BiblioListLayout";
import BiblioTableBody from "@/Components/Biblio/BiblioTableBody";
import PageHeader from "@/Components/PageHeader";
import SearchBar from "@/Components/SearchBar";
import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import TextInput from "@/Components/TextInput";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SearchBarLayout from "@/Layouts/SearchBarLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";

export default function Bibliographies({ biblios }) {
    return (
        <div className="flex fixed min-w-full bg-light-gray max-h-screen">
            <SidebarLayout>
                <BibliographySidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader> Pustaka </PageHeader>
                    <SearchBarLayout>
                        <SearchBar />
                    </SearchBarLayout>

                    <BiblioListLayout>
                        <BiblioTableBody biblios = {biblios} />
                    </BiblioListLayout>


                </MainContentLayout>
            </div>
        </div>
    );
}
