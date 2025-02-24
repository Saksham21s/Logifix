import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; 
import "../Styles/ScrolltoTop.css"; 

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button 
            className={`scroll-to-top ${visible ? "show" : ""}`} 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTop;
