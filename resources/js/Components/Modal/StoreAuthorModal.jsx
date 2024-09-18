import { memo, useState } from "react";
import { useForm } from "@inertiajs/react";
import toastUtils from "@/utils/toastUtils";
import Modal from "./Modal";
import TextInput from "../TextInput";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";
import Autocomplete from "../Autocomplete";
import axios from "axios";

export default memo(function StoreAuthorModal({
    closelable = true,
    onClose = () => {},
    onAdded = () => {},
    show = false,
}) {
    const { post, get, data, setData, errors, reset } = useForm({
        authorName: "",
    });

    const handleAuthorNameChange = (authorName) => {
        setData("authorName", authorName);
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
                <div className="flex items-center py-2 border-b">
                    <label htmlFor="author">Nama</label>
                    <span className="mx-7">:</span>
                    <div>
                        <Autocomplete
                            value={data.authorName}
                            onChange={handleAuthorNameChange}
                            name={"author.search"}
                        />
                        <InputError message={errors.authorName} />
                    </div>
                </div>
                <PrimaryButton type="submit" className="mt-5 bg-primary">
                    Tambah
                </PrimaryButton>
            </form>
        </Modal>
    );
});
