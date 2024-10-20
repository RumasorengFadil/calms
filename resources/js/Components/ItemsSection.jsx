import { useState } from "react";
import StoreAuthorModal from "./Modal/StoreAuthorModal";
import PrimaryButton from "./PrimaryButton";
import PropTypes from "prop-types";
import { useForm } from "@inertiajs/react";
import toastUtils from "@/utils/toastUtils";

function ItemsSection({ items, onDelete }) {
    const [isVisible, setIsVisible] = useState(false);
    const setModalVisibility = (isVisible) => setIsVisible(isVisible);
    const { delete: destroy, errors, data, setData, reset } = useForm({
        items : items
    });

    const submit = function (itemId) {
        if (confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) {
            const items = data.items.filter(
                (item) => item.item_id !== itemId
            );
            setData("items", items);
            
            destroy(route("items.destroy", itemId), {
                onSuccess: (response) => {
                    toastUtils.showSuccess(response.props.flash);
                },
                onError: (errors) => {
                    toastUtils.showError(errors);
                },
            });
        }
    };
    return (
        <div className="flex-1">
            <div className="flex flex-col basis-full">
                <PrimaryButton
                    type="button"
                    onClick={() => setModalVisibility(true)}
                    className="bg-shadow-blue w-max"
                >
                    Tambah Penulis
                </PrimaryButton>
                <div className="border mt-5 rounded p-5 h-28 overflow-auto">
                    {data.items.length > 0 ? (
                        items.map((item) => (
                            <div
                                key={item.item_id}
                                className="flex items-center border-b p-3"
                            >
                                <PrimaryButton
                                    type="button"
                                    className="bg-red-500 mr-5"
                                    onClick={() => submit(item.item_id)}
                                >
                                    Hapus
                                </PrimaryButton>
                                {item.item_code}
                            </div>
                        ))
                    ) : (
                        <p className="w-full h-full flex items-center justify-center">
                            Tidak ada penulis yang ditambahkan.
                        </p>
                    )}
                </div>
            </div>

            <StoreAuthorModal
                show={isVisible}
                onClose={() => setModalVisibility(false)}
                // onAdded={onAdded}
            />
        </div>
    );
}

// Tambahkan validasi props di sini
// ItemsSection.propTypes = {
//     authors: PropTypes.array.isRequired, // authors harus berupa array
//     onAdded: PropTypes.func.isRequired,  // onAdded harus berupa function
//     onDelete: PropTypes.func.isRequired, // onDelete harus berupa function
// };

export default ItemsSection;
