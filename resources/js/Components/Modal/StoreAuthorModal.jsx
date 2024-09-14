import { memo, useState } from "react";
import { useForm } from "@inertiajs/react";
import toastUtils from "@/utils/toastUtils";
import Modal from "./Modal";
import TextInput from "../TextInput";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";

export default memo(function StoreAuthorModal({
    closelable = true,
    onClose = () => {},
    onAdded = () => {},
    show = false,
}) {
    const { post, data, setData, errors, reset } = useForm({
        authorName: "",
    });

    const handleAuthorNameChange = (e) => {
        setData("authorName", e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("author.store"), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
                onClose();
                onAdded(response.props.flash.author);
                reset();
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };
    return (
        <Modal show={show} onClose={() => onClose()} closeable={closelable}>
            <div className="p-5 border-b">Tambah Penulis Baru</div>
            <form onSubmit={submit} action="" className="p-5">
                <div className="py-2 border-b">
                    <div>
                        <label htmlFor="author">Nama</label>
                        <span className="mx-7">:</span>
                        <TextInput
                            type="text"
                            className="p-1 pl-2"
                            placeholder="exp : Fadil, Jr"
                            name="authorName"
                            value={data.authorName}
                            onChange={handleAuthorNameChange}
                        />
                    </div>
                    <InputError message={errors.authorName} />
                </div>
                <PrimaryButton type="submit" className="mt-5 bg-primary">
                    Simpan
                </PrimaryButton>
            </form>
        </Modal>
    );
});
