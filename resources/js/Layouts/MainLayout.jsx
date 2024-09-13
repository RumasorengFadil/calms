import { memo } from "react";
import { ToastContainer } from "react-toastify";

export default memo(function MainLayout({ children, className }) {
    return (
        <div className={className}>
            {/* Toast container to catch notifications globally */}
            <ToastContainer />

            {/* Main content of the page */}
            {children}
        </div>
    );
});