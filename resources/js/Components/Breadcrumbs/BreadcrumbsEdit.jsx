import { memo } from "react";
import Breadcrumbs from "./Breadcrumbs ";

const links = [
    { name: "bibliographies.index", label: "Daftar Pustaka" },
    {
        name: "bibliographies.edit",
        label: "Edit Pustaka",
    },
];

export default memo(function BreadcrumbsEdit({biblioId}) {
    return <Breadcrumbs param={biblioId} links={links} />;
});
