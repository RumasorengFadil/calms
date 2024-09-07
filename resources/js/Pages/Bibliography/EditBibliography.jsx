import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs ";
import BreadcrumbsEdit from "@/Components/Breadcrumbs/BreadcrumbsEdit";

export default function EditBibliography({ biblio, breadcrumbs }) {
    
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <BibliographySidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    {/* <PageHeader>Edit Pustaka</PageHeader> */}
                </MainContentLayout>
            </div>
        </div>
    );
}
