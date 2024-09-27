export default function SearchBarLayout({
    children,
    className
}) {
    return (
        <div className={"py-5 px-10 border-y " + className}>
            {children}
        </div>
    );
}
