import { useState } from "react";

export const useDropdown = (show) => {
    const [showDropdown, setShowDropdown] = useState(show);
    
    return { showDropdown, setShowDropdown };
};