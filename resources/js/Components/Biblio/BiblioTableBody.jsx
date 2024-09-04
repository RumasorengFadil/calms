import { memo } from "react";
import BiblioList from "./BiblioList";
import TextInput from "../TextInput";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";

export default memo(function BiblioTableBody({ biblios, className = "" }) {
    const {
        data,
        setData,
        delete: destroy,
        get,
        errors,
        processing,
        recentlySuccessful,
    } = useForm({
        biblioId: "",
        selectedBiblioIds: [],
    });

    const handleSelectBiblioId = (id) => {
        const selectedBiblioIds = data.selectedBiblioIds.includes(id)
            ? data.selectedBiblioIds.filter((item) => item !== id)
            : [...data.selectedBiblioIds, id];
        setData("selectedBiblioIds", selectedBiblioIds);
    };

    const submit = (e, method) => {
        console.log(data.biblioId);
        e.preventDefault();

        console.log();
        if (method === "get") {
        }

        if (method === "delete") {
            // delete(route("bibliographies.update"));
        }
    };
    const selectAllBibliographyIds  = (data) => {
        const selectedBiblioIds = data.map((item) => item.biblio_id);
        setData("selectedBiblioIds", selectedBiblioIds);
    };
    const unselectAllBibliographyIds = () => {
        setData("selectedBiblioIds", []);
    };
    return (
        <div className={"px-10" + className}>
            {biblios.data.map((biblio) => (
                <div
                    className={"flex border-y py-3"}
                    key={biblio.biblio_id}
                >
                    <div className="basis-1/5 flex items-center justify-start">
                        <TextInput
                            type="checkbox"
                            onChange={() => handleSelectBiblioId(biblio.biblio_id)}
                            checked={data.selectedBiblioIds.includes(
                                biblio.biblio_id
                            )}
                        />
                    </div>
                    <div className="basis-full">
                        <div className="flex">
                            <img
                                className=""
                                src="/img/bibliography/biblio-default-picture.png"
                                alt=""
                            />
                            <div className="p-4">
                                <div className="mb-2">{biblio.title}</div>
                                <div className="text-gray-400">
                                    JURAGAN MUDA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 text-gray-400">
                        {biblio.publisher.publisher_name}
                    </div>
                    <div className="basis-1/3 ">SI00027</div>
                    <div className="basis-1/3">
                        <div className="flex h-full items-end">
                            <form action="" onSubmit={(e) => submit(e, "get")}>
                                <TextInput
                                    className="text-primary underline cursor-pointer"
                                    type="submit"
                                    value="edit"
                                />
                            </form>
                            <form
                                action=""
                                onSubmit={(e) => submit(e, "delete")}
                            >
                                <TextInput
                                    className="text-red-600 underline cursor-pointer mx-4"
                                    type="submit"
                                    value="hapus"
                                    onClick={(e) => submit(e, "delete")}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            ))}
            <div className="py-3 px-10">
                <PrimaryButton className="bg-red-500">Hapus Data yang Dipilih</PrimaryButton>
                <PrimaryButton onClick = {() => selectAllBibliographyIds(biblios.data)} className="bg-gray-500 mx-2">Pilih Semua</PrimaryButton>
                <PrimaryButton onClick = {unselectAllBibliographyIds} className="bg-gray-500">Jangan Pilih Semua</PrimaryButton>
            </div>
        </div>
    );
});
