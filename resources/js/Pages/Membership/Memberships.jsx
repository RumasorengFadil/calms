import MembershipSidebar from "@/Components/Sidebar/MembershipSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import PageHeader from "@/Components/PageHeader";
import SearchBarLayout from "@/Layouts/SearchBarLayout";
import SearchBar from "@/Components/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import MemberTableBody from "@/Components/Membership/MemberTableBody";
import BiblioTableLayout from "@/Components/Biblio/BiblioTableLayout";
import { useAutocomplete } from "@/hooks/useAutocomplete";
import { useState } from "react";

export default function Membership({ members, filters }) {
    const [searchKey, setSearchKey] = useState(filters? filters.searchKey: "");


    return (
        <MainLayout>
            <div className="flex fixed min-w-full bg-light-gray max-h-screen">
                <SidebarLayout>
                    <MembershipSidebar />
                </SidebarLayout>

                <div className="flex flex-col w-full">
                    <TopbarLayout />
                    <MainContentLayout>
                        <PageHeader>Keanggotaan</PageHeader>
                        <SearchBarLayout>
                            <SearchBar
                                searchKey={searchKey}
                                setSearchKey={setSearchKey}
                                route={route("membership.search")}
                                className="w-1/2"
                            />
                        </SearchBarLayout>

                        <BiblioTableLayout>
                            <MemberTableBody searchKey={searchKey} members={members} />
                        </BiblioTableLayout>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
}
