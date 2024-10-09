import MembershipSidebar from "@/Components/Sidebar/MembershipSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import PageHeader from "@/Components/PageHeader";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs ";
import FormActions from "@/Components/Form/FormActions";
import { useForm } from "@inertiajs/react";
import { useImagePreview } from "@/hooks/useImagePreview";
import FormLayout from "@/Layouts/FormLayout";
import FormElement from "@/Components/Form/FormElement";
import MainLayout from "@/Layouts/MainLayout";
import toastUtils from "@/utils/toastUtils";

export default function EditMember({ member, breadcrumbs }) {
    const { data, setData, errors, post, reset } = useForm({
        memberName: member.member_name,
        birthDate: member.birth_date,
        gender: member.gender,
        expireDate: member.expire_date,
        memberSinceDate: member.member_since_date,
        memberPhone: member.member_phone,
        memberPassword: null,
        passwordConfirmation: "",
        instName: member.inst_name,
        memberAddress: member.member_address,
        postalCode: member.postal_code,
        registerDate: member.register_date,
        pin: member.pin,
        memberPhoto: null,
        memberEmail: member.member_email,
    });
    const { imagePreview, handleFileChange } = useImagePreview(); // State untuk menyimpan Data URL

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("membership.update", member.member_id), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
                reset();
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    const deactivate = (e) => {
        e.preventDefault();

        post(route("membership.deactivate", member.member_id), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
                reset();
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };
    return (
        <MainLayout>
            <div className="flex fixed min-w-full bg-light-gray max-h-screen">
                <SidebarLayout>
                    <MembershipSidebar />
                </SidebarLayout>

                <div className="flex flex-col w-full">
                    <TopbarLayout />

                    <MainContentLayout>
                        <Breadcrumbs breadcrumbs={breadcrumbs} />

                        <FormLayout>
                            <FormElement
                                label="Nama Anggota *"
                                name="memberName"
                                placeholder="exp : Zubair Rumi"
                                value={data.memberName}
                                type="text"
                                onChange={handleChange}
                                error={errors.memberName}
                            />
                            <FormElement
                                label="Tanggal Lahir *"
                                name="birthDate"
                                value={data.birthDate}
                                type="date"
                                onChange={handleChange}
                                className="w-3/5"
                                error={errors.birthDate}
                            />
                            <FormElement
                                label="Jenis Kelamin *"
                                className="w-1/2"
                            >
                                <select
                                    name="gender"
                                    onChange={handleChange}
                                    value={data.gender}
                                    className="rounded py-1 w-full border-gray-300"
                                    id=""
                                    error={errors.gender}
                                >
                                    <option value="Pilih">Pilih</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </FormElement>
                            <FormElement
                                label="Terdaftar Sejak *"
                                name="memberSinceDate"
                                value={data.memberSinceDate}
                                type="date"
                                onChange={handleChange}
                                className="w-3/5"
                                error={errors.memberSinceDate}
                            />
                            <FormElement
                                label="Member Sampai *"
                                name="expireDate"
                                value={data.expireDate}
                                type="date"
                                onChange={handleChange}
                                className="w-3/5"
                                error={errors.expireDate}
                            />
                            <FormElement
                                label="Institusi"
                                name="instName"
                                placeholder="exp : Universitas Indonesia"
                                value={data.instName}
                                type="text"
                                onChange={handleChange}
                            />
                            <FormElement label="Alamat">
                                <textarea
                                    className="p-1 px-2  min-h-20 max-h-40 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    name="memberAddress"
                                    value={
                                        data.memberAddress
                                            ? data.memberAddress
                                            : ""
                                    }
                                    placeholder="exp : Jalan raya Bahagia no. 12 Provinsi Jakarta"
                                    onChange={handleChange}
                                />
                            </FormElement>
                            <FormElement
                                label="Kode Pos"
                                name="postalCode"
                                value={data.postalCode}
                                placeholder="exp : 97128"
                                type="text"
                                onChange={handleChange}
                                className="w-1/2"
                            />
                            <FormElement
                                label="Nomor Telepon *"
                                name="memberPhone"
                                value={data.memberPhone}
                                placeholder="exp : 085244792310"
                                type="text"
                                onChange={handleChange}
                                className="w-3/5"
                                error={errors.memberPhone}
                            />
                            <FormElement
                                label="PIN"
                                name="pin"
                                value={data.pin}
                                placeholder="exp : 12342"
                                type="number"
                                onChange={handleChange}
                                className="w-1/2"
                            />
                            <FormElement label="Foto Anggota">
                                <div className="flex items-start">
                                    <img
                                        className="mr-7 rounded h-24 w-20"
                                        src={
                                            imagePreview
                                                ? imagePreview
                                                : member.member_photo_path
                                                ? `/storage/uploads/img/members/photo/${member.member_photo_path}`
                                                : `/img/memberships/member-default-picture.png`
                                        }
                                    ></img>
                                    <div className="flex items-center">
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            name="biblioPhoto"
                                            onChange={(e) =>
                                                handleFileChange(e, (file) =>
                                                    setData("memberPhoto", file)
                                                )
                                            }
                                        />

                                        <input
                                            type="text"
                                            className="border focus:border-gray-300 focus:ring-0 cursor-auto border-gray-300 rounded-md shadow-sm p-1 px-2 w-full"
                                            placeholder="Pilih Berkas"
                                            value={
                                                data.memberPhoto?.name
                                                    ? data.memberPhoto?.name
                                                    : ""
                                            }
                                            readOnly
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer mx-2 bg-shadow-blue text-white p-1 px-4 rounded-md shadow-sm hover:bg-gray-700 transition ease-in-out duration-150"
                                        >
                                            Browse
                                        </label>
                                    </div>
                                </div>
                            </FormElement>

                            <FormElement
                                label="Email"
                                name="memberEmail"
                                value={data.memberEmail}
                                placeholder="exp : zubairumi@gmail.com"
                                type="email"
                                onChange={handleChange}
                                error={errors.memberEmail}
                            />
                            <FormElement
                                label="New Password"
                                name="memberPassword"
                                value={data.memberPassword}
                                type="password"
                                onChange={handleChange}
                                className="w-3/5"
                                error={errors.memberPassword}
                            />
                            <FormElement
                                label="Konfirmasi Password"
                                name="passwordConfirmation"
                                value={data.passwordConfirmation}
                                type="password"
                                onChange={handleChange}
                                className="w-3/5"
                                error={errors.passwordConfirmation}
                            />

                            <FormActions
                                onStatusChange={{
                                    callback: (e) => deactivate(e),
                                    status: member.is_active,
                                }}
                                onBack={(e) => {
                                    e.preventDefault();
                                    window.history.back();
                                }}
                                onSave={submit}
                            />
                        </FormLayout>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
}
