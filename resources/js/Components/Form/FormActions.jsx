import { memo } from "react";
import TextInput from "../TextInput";
import InputGroup from "../InputGroup";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";

export default memo(function FormActions({
    className = "",
    status = true,
    children,
    label,
    error,
    onSave,
    onDeactivate,
    onStatusChange,
    onBack,
    onEdit,
    onSearch,
    ...props
}) {
    return (
        <div className="flex px-10 bg-light-gray py-6 justify-end">
            {onStatusChange && (
                <PrimaryButton
                    onClick={(e) => onStatusChange.callback(e)}
                    className={`cursor-pointer mx-1 ${!onStatusChange.status?"bg-green-500":"bg-red-500"} hover:bg-gray-700`}
                >
                    {!onStatusChange.status?"Aktifkan":"Berhentikan"}
                </PrimaryButton>
            )}
            {onDeactivate && (
                <PrimaryButton
                    onClick={(e) => onDeactivate(e)}
                    className="cursor-pointer mx-1 bg-red-500 hover:bg-gray-700"
                >
                    Berhentikan
                </PrimaryButton>
            )}
            {onBack && (
                <PrimaryButton
                    onClick={(e) => onBack(e)}
                    className="cursor-pointer mx-1 bg-shadow-blue hover:bg-gray-700"
                >
                    Kembali
                </PrimaryButton>
            )}
            {onEdit && (
                <PrimaryButton
                    onClick={(e) => onEdit(e)}
                    className="cursor-pointer mx-1 bg-primary hover:bg-gray-700"
                >
                    Edit
                </PrimaryButton>
            )}

            {/* <PrimaryButton className="cursor-pointer mx-1 bg-shadow-blue hover:bg-gray-700">Edit</PrimaryButton> */}

            {onSave && (
                <PrimaryButton
                    type="button"
                    onClick={(e) => onSave(e)}
                    className="cursor-pointer mx-1 bg-secondary hover:bg-gray-700"
                >
                    Simpan
                </PrimaryButton>
            )}
            {onSearch && (
                <PrimaryButton
                    type="button"
                    onClick={(e) => onSearch(e)}
                    className="cursor-pointer mx-1 bg-secondary hover:bg-gray-700"
                >
                    Cari
                </PrimaryButton>
            )}
        </div>
    );
});
