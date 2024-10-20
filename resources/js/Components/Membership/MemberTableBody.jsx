import { memo } from "react";
import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";
import BibliographyItemActions from "../Biblio/BibliographyItemActions ";
import Pagination from "../Pagination";
import PrimaryButton from "../PrimaryButton";
import { PiPhoneCallThin } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import MembershipItemActions from "./MembershipItemActions";
import toastUtils from "@/utils/toastUtils";

export default memo(function MemberTableBody({ members, className = "" }) {
    // const { flash } = usePage().props;

    const {
        data,
        setData,
        delete: destroy,
    } = useForm({
        selectedMemberIds: [],
    });

    const handleSelectBiblioId = (id) => {
        const selectedMemberIds = data.selectedMemberIds.includes(id)
            ? data.selectedMemberIds.filter((item) => item !== id)
            : [...data.selectedMemberIds, id];
        setData("selectedMemberIds", selectedMemberIds);
    };

    const submit = (e) => {
        e.preventDefault();
        if (confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) {
            destroy(route("membership.destroys"), {
                onSuccess: (response) => {
                    toastUtils.showSuccess(response.props.flash);
                    setData("selectedMemberIds", []);
                },
                onError: (errors) => {
                    toastUtils.showError(errors);
                },
            });
        }
    };
    const selectAllBibliographyIds = (data) => {
        const selectedMemberIds = data.map((item) => item.member_id);
        setData("selectedMemberIds", selectedMemberIds);
    };
    const unselectAllBibliographyIds = () => {
        setData("selectedMemberIds", []);
    };
    return (
        <div className={"" + className}>
            {members.data.map((member) => (
                <div
                    className={"flex px-10 border-y py-3"}
                    key={member.member_id}
                >
                    <div className="flex basis-1/12 items-center justify-start">
                        <TextInput
                            type="checkbox"
                            onChange={() =>
                                handleSelectBiblioId(member.member_id)
                            }
                            checked={data.selectedMemberIds.includes(
                                member.member_id
                            )}
                        />
                    </div>
                    <div className="basis-1/3">
                        <div className="flex items-center">
                            <img
                                className="rounded h-24"
                                src={
                                    member.member_photo_path
                                        ? `/storage/uploads/img/members/photo/${member.member_photo_path}`
                                        : "/img/memberships/member-default-picture.png"
                                }
                                alt=""
                            />
                            <div className="p-4">
                                <div className="font-bold">
                                    {member.member_name}
                                </div>
                                <div className="my-2">
                                    ID: {member.member_id}
                                </div>
                                <div className="">
                                    <PiPhoneCallThin
                                        className="inline"
                                        size={24}
                                    />
                                    :{" "}
                                    {member.member_phone
                                        ? member.member_phone
                                        : "-"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 items-center flex text-gray-400">
                        <div>
                            <div className="flex items-center">
                                <FaLocationDot
                                    className="mr-2"
                                    size={20}
                                    color="black"
                                />
                                <div className="text-black">
                                    {member.member_address
                                        ? member.member_address
                                        : " -"}
                                </div>
                            </div>
                            <div className={`my-2 text-black  `}>
                                Status: 
                                <span
                                    className={`${
                                        member.is_active
                                            ? "text-green-500 font-bold"
                                            : "text-red-500 font-bold"
                                    }`}
                                >
                                    {member.is_active ? " Aktif" : " Tidak aktif"}
                                </span>
                            </div>

                            <div className="flex items-center">
                                <MdOutlineMail
                                    className="mr-2"
                                    size={20}
                                    color="black"
                                />
                                {console.log(member)}
                                <div className="text-black">
                                    {member.email
                                        ? member.email
                                        : " -"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto px-4 flex items-center ">
                        <div>
                            <div>
                                <p className="font-bold">Terdaftar Sejak</p>
                                <p>{member.member_since_date}</p>
                            </div>
                            <div>
                                <p className="font-bold">Anggota Sampai</p>
                                <p>{member.expire_date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto">
                        <MembershipItemActions memberId={member.member_id} />
                    </div>
                </div>
            ))}

            <Pagination className="py-3 px-10" links={members.links} />

            <div className="py-6 px-10 bg-light-gray">
                <PrimaryButton onClick={submit} className="bg-red-500">
                    Hapus Data yang Dipilih
                </PrimaryButton>
                <PrimaryButton
                    onClick={() => selectAllBibliographyIds(members.data)}
                    className="bg-gray-500 mx-2"
                >
                    Pilih Semua
                </PrimaryButton>
                <PrimaryButton
                    onClick={unselectAllBibliographyIds}
                    className="bg-gray-500"
                >
                    Jangan Pilih Semua
                </PrimaryButton>
            </div>
        </div>
    );
});
