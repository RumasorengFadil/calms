import { memo } from "react";
import TextInput from "../TextInput";
import InputGroup from "../InputGroup";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

export default memo(function FormElement({
    className = "",
    children,
    label,
    error,
    ...props
}) {
    return (
        <div className="border-y">
            <div className={"flex px-10  py-3 items-center " + className}>
                <InputLabel className="basis-52">{label}</InputLabel>
                <span className="mx-7">:</span>
                <InputGroup className="flex-1">
                    {children ? (
                        children
                    ) : (
                        <TextInput {...props} className="p-1 px-2 w-full" />
                    )}
                    <InputError message={error} />
                </InputGroup>
            </div>
        </div>
    );
});
