import { memo, useState } from "react";
import Modal from "./Modal";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";

export default memo(function ModalAddItemCodePattern({
    value,
    className = "",
    children,
    ...props
}) {
    const [isVisible, setIsVisible] = useState(false);

    const setModalVisibility = (isVisible) => {
        setIsVisible(isVisible);
    };
    return (
        <Modal show={isVisible} onClose={() => setModalVisibility(false)}>
            <div className="p-5 border-b">Tambah Pola Baru</div>
            <form action="" className="p-5">
                <div className="py-2 flex items-center border-b">
                    <label htmlFor="pattern">Pola</label>
                    <span className="mx-7">:</span>
                    <TextInput
                        type="text"
                        className="p-1 pl-2"
                        placeholder="exp : B00001"
                    />
                </div>

                <PrimaryButton className="mt-5 bg-primary">
                    Simpan
                </PrimaryButton>
            </form>
        </Modal>
    );
});
