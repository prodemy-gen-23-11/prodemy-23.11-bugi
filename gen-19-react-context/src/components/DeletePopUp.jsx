import React from "react";

function DeletePopUp ({ name, handleClose }, props) {
    return(
        <div className="fixed flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="h-10 w-20 p-4 rounded-lg bg-white shadow-md">
                <p>Are you sure to delete {name} product?</p>
                <button onClick={() => props.confirmDelete(true)}>
                    Yes
                </button>

                <button onClick={handleClose}>
                    No
                </button>
            </div>
        </div>
    );
}

export default DeletePopUp;