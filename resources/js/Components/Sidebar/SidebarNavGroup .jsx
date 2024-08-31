import React, { memo } from "react";
import SidebarNavLink from "./SidebarNavLink"; // Pastikan path impor benar

export default memo(function SidebarNavGroup({ links }) {
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
});
