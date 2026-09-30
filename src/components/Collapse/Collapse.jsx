import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div 
                className="collapse__header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2>{title}</h2>

                <span className={`collapse__arrow ${isOpen ? "open" : ""}`}></span>
            </div>

            {isOpen && (
                <div className={`collapse__content ${isOpen ? "open" : ""}`}>
                    {children}
                </div>
)}
        </div>
    );
}

export default Collapse;