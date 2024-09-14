import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import StorePatternModal from "./Modal/StorePatternModal";
import TextInput from "./TextInput";

export default function ItemCodePatternSection({ onChange, data, itemCodePatterns }) {
    const [isVisible, setIsVisible] = useState(false);

    const setModalVisibility = (isVisible) => {
        setIsVisible(isVisible);
    };

    return (
        <div className="w-full">
            <div className="basis-full flex">
                <select
                    name="itemCodePattern"
                    className="p-1 pl-2 rounded basis-full"
                    onChange={onChange}
                >
                    <option value="">-- Tentukan Pola --</option>
                    {itemCodePatterns.map((code, i) => (
                        <option key={code.pattern_id} value="">
                            {code.item_code_pattern}
                        </option>
                    ))}
                </select>
                <TextInput
                    type="number"
                    className="p-1 pl-2 mx-4 w-2/3"
                    placeholder="Total item(s)"
                    min={0}
                    name="totalItems"
                    value = {data.totalItems}
                    onChange = {onChange}
                />
                <PrimaryButton
                    type="button"
                    onClick={() => setModalVisibility(true)}
                    className="bg-shadow-blue text-center w-2/3 basis-auto"
                >
                    Tambah Pola Baru
                </PrimaryButton>
            </div>

            <StorePatternModal
                show={isVisible}
                onClose={() => setModalVisibility(false)}
            />
        </div>
    );
}
