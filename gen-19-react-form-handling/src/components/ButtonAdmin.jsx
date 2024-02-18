import React from "react";

function ButtonAdmin({ children, onClick}) {
    return (
        <button onClick={onClick} className="w-24 h-10 px-2 bg-sky-400 rounded-lg text-zinc-50 hover:bg-sky-600 duration-200">
            {children}
        </button>
    );
}

export default ButtonAdmin;