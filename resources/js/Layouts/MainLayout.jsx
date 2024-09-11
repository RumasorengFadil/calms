import { ToastContainer } from "react-toastify";

export default function MainLayout({ children }) {
    return (
        <div>
            {/* Toast container to catch notifications globally */}
            <ToastContainer />

            {/* Main content of the page */}
            {children}
        </div>
    );
}