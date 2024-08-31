import { memo } from "react";

export default memo(function BiblioListLayout({ children, className = "" }) {
    return (
        <div className={"w-full bg-white" + className}>
            <div id="header" className="flex border-y py-3 px-10">
                <div className="basis-1/5 text-ceter">Pilih</div>
                <div className="basis-full">Judul</div>
                <div className="basis-1/3">Penerbit</div>
                <div className="basis-1/3">Kode Buku</div>
                <div className="basis-1/3">Aksi</div>
            </div>
            <div className="px-10">{children}</div>
        </div>
    );
});
