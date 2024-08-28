import React from "react";
import SidebarNavLink from "./SidebarNavLink"; // Pastikan path impor benar

export default function SidebarNavGroup({ links }) {
    const currentRouteName = route().current();

    return (
        <>
            {links.map(({ name, label }) => (
                <SidebarNavLink
                    key={name}
                    href={route(name)}
                    active={route().current(name)}
                >
                    {label}
                </SidebarNavLink>
            ))}
        </>
    );
}
