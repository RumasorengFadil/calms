import { memo, useState } from "react";
import { useForm } from "@inertiajs/react";
import toastUtils from "@/utils/toastUtils";
import Modal from "./Modal";
import TextInput from "../TextInput";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";

export default memo(function StorePatternModal({
    closelable = true,
    onClose = () => {},
    show = false,
}) {
    const { post, data, setData, errors, reset } = useForm({
        itemCodePattern: "",
    });

    const handleItemCodePattern = (e) => {
        setData("itemCodePattern", e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("item-code-pattern.store"), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
                onClose();
                reset();
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };
    return (
        <Modal show={show} onClose={() => onClose()} closeable={closelable}>
            <div className="p-5 border-b">Tambah Pola Baru</div>
            <form onSubmit={submit} action="" className="p-5">
                <div className="py-2 border-b">
                    <div>
                        <label htmlFor="pattern">Pola</label>
                        <span className="mx-7">:</span>
                        <TextInput
                            type="text"
                            className="p-1 pl-2"
                            placeholder="exp : B000"
                            name="itemCodePattern"
                            value={data.itemCodePattern}
                            onChange={handleItemCodePattern}
                        />
                    </div>
                    <InputError message={errors.itemCodePattern} />
                </div>
                <PrimaryButton type="submit" className="mt-5 bg-primary">
                    Simpan
                </PrimaryButton>
            </form>
        </Modal>
    );
});
