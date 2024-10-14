import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import ApplicationLogo from "../ApplicationLogo";
import FormLayout from "@/Layouts/FormLayout";
import FormElement from "../FormElement";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import InputError from "../InputError";
import Checkbox from "../Checkbox";
import PrimaryButton from "../PrimaryButton";

export default function UserLogin({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
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

        post(route("login"), {
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    return (
        <FormLayout onSubmit={submit} className="mt-6">
            <FormElement className="flex-col px-0 border-y-0">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                    id="email"
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="email"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
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
                    onChange={(e) => setData("password", e.target.value)}
                />

                <InputError message={errors.password} className="mt-2" />
            </FormElement>

            <FormElement className="flex-col px-0 border-y-0">
                <label className="flex items-center">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
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
    );
}
