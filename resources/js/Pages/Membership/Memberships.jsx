import MembershipSidebar from "@/Components/Sidebar/MembershipSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";
import SearchBarLayout from "@/Layouts/SearchBarLayout";
import SearchBar from "@/Components/SearchBar";
import { useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import MemberTableBody from "@/Components/Membership/MemberTableBody";
import BiblioTableLayout from "@/Components/Biblio/BiblioTableLayout";

export default function Membership({ members }) {
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
                                route={route("membership.search")}
                                className="w-1/2"
                            />
                        </SearchBarLayout>

                        <BiblioTableLayout>
                            <MemberTableBody members={members} />
                        </BiblioTableLayout>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
}
