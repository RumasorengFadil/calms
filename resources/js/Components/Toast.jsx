import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast({ message, type, recentlySuccessful, children }) {

    return (
        <div>
            <ToastContainer /> {/* Wadah untuk menampilkan toast */}
        </div>
    );
}
