import { memo } from "react";
import TextInput from "../TextInput";
import InputGroup from "../InputGroup";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";

export default memo(function FormActions({
    className = "",
    children,
    label,
    error,
    onSave,
    onBack,
    ...props
}) {
    return (
        <div className="flex px-10 bg-light-gray py-6 justify-end">
            {onBack && (
                <PrimaryButton
                    onClick={(e) => onBack(e)}
                    className="cursor-pointer mx-1 bg-shadow-blue hover:bg-gray-700"
                >
                    Kembali
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
        </div>
    );
});
