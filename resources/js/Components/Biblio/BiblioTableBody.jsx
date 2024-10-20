import { memo } from "react";
import TextInput from "../TextInput";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import BibliographyItemActions from "./BibliographyItemActions ";
import toastUtils from "@/utils/toastUtils";
import Pagination from "../Pagination";

export default memo(function BiblioTableBody({ biblios, className = "" }) {
    console.log(biblios);
    const {
        data,
        setData,
        delete: destroy,
    } = useForm({
        selectedBiblioIds: [],
    });

    const handleSelectBiblioId = (id) => {
        const selectedBiblioIds = data.selectedBiblioIds.includes(id)
            ? data.selectedBiblioIds.filter((item) => item !== id)
            : [...data.selectedBiblioIds, id];
        setData("selectedBiblioIds", selectedBiblioIds);
    };

    const submit = (e) => {
        e.preventDefault();
        if (confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) {
            destroy(route("bibliographies.destroys"), {
                onError: (errors) => {
                    toastUtils.showError(errors);
                },
                onSuccess: (response) => {
                    toastUtils.showSuccess(response.props.flash);
                    setData("selectedBiblioIds", []);
                },
            });
        }
    };
    const selectAllBibliographyIds = (data) => {
        const selectedBiblioIds = data.map((item) => item.biblio_id);
        setData("selectedBiblioIds", selectedBiblioIds);
    };
    const unselectAllBibliographyIds = () => {
        setData("selectedBiblioIds", []);
    };
    return (
        <div className={" " + className}>
            {biblios.data.map((biblio) => (
                <div
                className={"flex px-10 border-y py-3"}
                key={biblio.biblio_id}
                >
                    <div className="basis-1/5 flex items-center justify-start">
                        <TextInput
                            type="checkbox"
                            onChange={() =>
                                handleSelectBiblioId(biblio.biblio_id)
                            }
                            checked={data.selectedBiblioIds.includes(
                                biblio.biblio_id
                            )}
                        />
                    </div>
                    <div className="basis-full">
                        <div className="flex">
                            <img
                                className="rounded"
                                src={
                                    biblio.biblio_photo_path
                                        ? `/storage/uploads/img/biblios/photo/${biblio.biblio_photo_path}`
                                        : `/img/bibliography/biblio-default-picture.png`
                                }
                                alt=""
                            />
                            <div className="p-4">
                                <div className="mb-2">{biblio.title}</div>
                                <div className="text-gray-400">
                                    {biblio.publisher.publisher_name}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 text-gray-400">
                        {biblio.publisher.publisher_name}
                    </div>
                    <div
                        className={`basis-1/3 ${
                            !biblio.items.length ? "text-red-500" : ""
                        }`}
                    >
                        {biblio.items.length ? biblio.items.length : "none"}
                    </div>
                    <div className="basis-1/3">
                        <BibliographyItemActions biblioId={biblio.biblio_id} />
                    </div>
                </div>
            ))}

            <Pagination className={"py-3 px-10"} links={biblios.links} />

            <div className="py-6 bg-light-gray px-10">
                <PrimaryButton onClick={submit} className="bg-red-500">
                    Hapus Data yang Dipilih
                </PrimaryButton>
                <PrimaryButton
                    onClick={() => selectAllBibliographyIds(biblios.data)}
                    className="bg-gray-500 mx-2"
                >
                    Pilih Semua
                </PrimaryButton>
                <PrimaryButton onClick={unselectAllBibliographyIds}>
                    Jangan Pilih Semua
                </PrimaryButton>
            </div>
        </div>
    );
});
