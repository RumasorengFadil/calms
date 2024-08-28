import React from 'react';
import SidebarNavLink from './SidebarNavLink'; // Pastikan path impor benar

export default function SidebarNavGroup({ links }){
    const currentRouteName = route().current();

    return (
        <>
            {links.map(({ href, label }) => (
                <SidebarNavLink
                    key={href}
                    href={href}
                    active={currentRouteName === href}
                >
                    {label}
                </SidebarNavLink>
            ))}
        </>
    );
};
