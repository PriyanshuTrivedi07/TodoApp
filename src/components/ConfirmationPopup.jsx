import React from 'react'

function ConfirmationPopup({ message, onCancle, onConfirm }) {
    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-gray-600 dark:bg-[#35373c] bg-opacity-50 dark:bg-opacity-50 transition-opacity duration-300 ease-in-out p-4">
            <div className="flex flex-col gap-4 bg-white dark:bg-[#202124] dark:text-white p-4 rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out w-full max-w-md">
                <p>{message}</p>
                <div className="flex justify-end flex-wrap space-x-2">
                    <button
                        onClick={onConfirm}
                        className="flex justify-center items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg active:scale-95"
                    >
                        Delete
                    </button>
                    <button
                        onClick={onCancle}
                        className="flex justify-center items-center gap-1 bg-[#35373c] hover:bg-[#2f3035] text-white px-4 py-1 rounded-lg active:scale-95"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPopup