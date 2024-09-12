import { toast } from "react-toastify";

/**
 * Menampilkan toast berdasarkan tipe dan daftar pesan.
 *
 * @param {Object} messages - Daftar pesan yang akan ditampilkan.
 * @param {string} type - Tipe toast, seperti 'success' atau 'error'.
 */
const displayToasts = (messages, type) => {
    Object.values(messages).forEach((message) => {
        toast[type](message);
    });
};

/**
 * Objek utilitas untuk menampilkan toast dengan tipe yang berbeda.
 */
const toastUtils = {
    showSuccess: (messages) => {
        displayToasts(messages, "success");
    },
    showError: (messages) => {
        displayToasts(messages, "error");
    }
};

export default toastUtils;