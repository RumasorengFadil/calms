import { memo } from "react";

export default memo(function FormElement({ className= "items-center", children, ...props }) {
    return (
        <div className={"flex px-10 border-y py-3 " + className}>
            {children}
        </div>
    );
});
