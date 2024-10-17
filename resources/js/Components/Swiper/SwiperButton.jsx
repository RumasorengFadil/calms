import { memo, useEffect, useRef, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

export default memo(function SwiperButton({}) {
    const swiper = useSwiper();

    return (
        <div className="">
            <div
                
                className="absolute z-50 top-0 right-3 flex justify-center items-center h-full"
            >
                <div onClick={() => swiper.slideNext()} className="bg-gray-300 cursor-pointer rounded-full px-2 py-8">
                    <FaCaretRight className="text-gray-500" size={28} />
                </div>
            </div>
            <div
                
                className="absolute z-50 top-0 left-3 flex justify-center items-center h-full"
            >
                <div onClick={() => swiper.slidePrev()} className="bg-gray-300 cursor-pointer rounded-full px-2 py-8">
                    <FaCaretLeft className="text-gray-500" size={28} />
                </div>
            </div>
            {/* <div onClick={() => swiper.slidePrev()} className="p-6 sticky top-0 bg-black"></div> */}
        </div>
    );
});
