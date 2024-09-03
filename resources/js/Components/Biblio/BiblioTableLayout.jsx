import { memo } from "react";

export default memo(function BiblioTableLayout({ children, className = "" }) {
    return (
        <div className={"w-full bg-white" + className}>
           {children}
        </div>
    );
});
