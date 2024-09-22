export default function PageHeader({ className, children }) {
    return <div className={"py-8 pl-10 text-3xl font-bold " + className}>{children}</div>;
}
