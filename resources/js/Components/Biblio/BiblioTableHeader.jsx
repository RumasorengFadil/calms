import { memo } from "react";

export default memo(function BiblioTableHeader({ children, className = "" }) {
    return (
        <div id="header" className="flex border-y py-3 px-10">
            <div className="basis-1/5 text-ceter">Pilih</div>
            <div className="basis-full">Judul</div>
            <div className="basis-1/3">Penerbit</div>
            <div className="basis-1/3">Salinan</div>
            <div className="basis-1/3">Aksi</div>
        </div>
    );
});
