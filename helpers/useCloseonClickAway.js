
import { useState, useEffect, useRef } from "react";

export function useCloseOnBlur(){
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    const handleClick = e => {
        if (ref.current && ref.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setShow(false);
    };

    useEffect(() => {
        if (show) {
          setTimeout(() => {
            document.addEventListener("click", handleClick);
          } ,200)
        } else {
            document.removeEventListener("click", handleClick);
        }

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [show]);

    return { ref, show, setShow };

}