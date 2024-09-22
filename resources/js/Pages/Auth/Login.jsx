import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import PageHeader from "@/Components/PageHeader";
import FormLayout from "@/Layouts/FormLayout";
import FormElement from "@/Components/FormElement";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="flex flex-col sm:flex-row-reverse bg-white rounded-lg">
                <div className="w-full sm:max-w-xl py-9 bg-primary">
                    <PageHeader className="py-0 pl-0 text-2xl text-center text-white">
                        Quote
                    </PageHeader>
                    <p className="mx-auto text-center text-white max-w-96 text-base px-4">
                        "Ilmu itu ada di mana-mana, pengetahuan di mana-mana
                        tersebar, kalau kita bersedia membaca, dan bersedia
                        mendengar." <br />- Felix Siauw
                    </p>
                </div>

                <div className="w-full sm:max-w-xl p-6">
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-8 mb-10 fill-current text-gray-500" />
                    </Link>
                    <PageHeader className="py-0 pl-0 text-2xl text-center">
                        Selamat Datang
                    </PageHeader>
                    <p className="text-center text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis non debitis quibusdam nostrum? Illo odit, nisi
                    </p>
                    <FormLayout onSubmit={submit} className="mt-6">
                        <FormElement className="flex-col px-0 border-y-0">
                            <InputLabel htmlFor="username" value="Username" />

                            <TextInput
                                id="username"
                                type="text"
                                name="username"
                                value={data.username}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.username}
                                className="mt-2"
                            />
                        </FormElement>
                        <FormElement className="flex-col px-0 border-y-0">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </FormElement>

                        <FormElement className="flex-col px-0 border-y-0">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                        </FormElement>

                        <FormElement className="flex-col px-0 border-y-0 py-0">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton
                                className="justify-center mt-6"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </FormElement>
                    </FormLayout>
                </div>
            </div>
        </div>
        // <GuestLayout>
        //     <Head title="Log in" />

        //     {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="username" value="Username" />

        //             <TextInput
        //                 id="username"
        //                 type="text"
        //                 name="username"
        //                 value={data.username}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 onChange={(e) => setData('username', e.target.value)}
        //             />

        //             <InputError message={errors.username} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        // <InputLabel htmlFor="password" value="Password" />

        // <TextInput
        //     id="password"
        //     type="password"
        //     name="password"
        //     value={data.password}
        //     className="mt-1 block w-full"
        //     autoComplete="current-password"
        //     onChange={(e) => setData('password', e.target.value)}
        // />

        // <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="block mt-4">
        // <label className="flex items-center">
        //     <Checkbox
        //         name="remember"
        //         checked={data.remember}
        //         onChange={(e) => setData('remember', e.target.checked)}
        //     />
        //     <span className="ms-2 text-sm text-gray-600">Remember me</span>
        // </label>
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        // {canResetPassword && (
        //     <Link
        //         href={route('password.request')}
        //         className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //     >
        //         Forgot your password?
        //     </Link>
        // )}

        // <PrimaryButton className="ms-4" disabled={processing}>
        //     Log in
        // </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
    );
}
