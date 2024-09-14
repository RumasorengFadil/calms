import { memo } from "react";

export default memo(function FormElement({ children, ...props }) {
    return (
        <div className="flex px-10 border-y items-center py-3">
            {children}
        </div>
    );
});
