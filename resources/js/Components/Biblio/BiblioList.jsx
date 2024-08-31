import { memo } from "react";
import TextInput from "../TextInput";
import { useForm, usePage } from "@inertiajs/react";

export default memo(function BiblioList({ className = "" }) {
    const user = usePage().props.auth.user;

    const { data, setData, delete:destroy, put, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            biblioId : ""
        });

    const submit = (e, method) => {
        e.preventDefault();

        delete(route("bibliographies.update"));
    };
    return (
        <div className={"flex border-y py-3" + className}>
            <div className="basis-1/5 flex items-center justify-start">
                <TextInput type="checkbox" />
            </div>
            <div className="basis-full">
                <div className="flex">
                    <img
                        className=""
                        src="/img/bibliography/biblio-default-picture.png"
                        alt=""
                    />
                    <div className="p-4">
                        <div className="mb-2">PANGERAN KODOK DAN SERIGALA</div>
                        <div className="text-gray-400">JURAGAN MUDA</div>
                    </div>
                </div>
            </div>
            <div className="basis-1/3 text-gray-400">GRAMEDIA</div>
            <div className="basis-1/3 ">SI00027</div>
            <div className="basis-1/3">
                <div className="flex h-full items-end">
                    <form action="">
                        <TextInput
                            className="text-primary underline cursor-pointer"
                            type="submit"
                            value="edit"
                            onClick = {(e) => submit(e, "put")}
                        />
                        <TextInput
                            className="text-red-600 underline cursor-pointer mx-4"
                            type="submit"
                            value="hapus"
                            onClick = {(e) => submit(e, "delete")}
                        />
                        <TextInput
                            className="hidden"
                            type="number"
                            value={data.biblioId}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
});
