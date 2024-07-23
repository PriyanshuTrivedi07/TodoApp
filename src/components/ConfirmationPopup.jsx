import React from 'react'
import { Button } from "./index"


function ConfirmationPopup({ message, onCancle, onConfirm }) {
    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-[4px] bg-[#202124] dark:bg-[#202124] bg-opacity-60 dark:bg-opacity-75 transition-opacity duration-300 ease-in-out p-4">
            <div className="flex flex-col gap-4 bg-white dark:bg-[#202124] dark:text-white p-4 rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out w-full max-w-md">
                <p>{message}</p>
                <div className="flex justify-end flex-wrap space-x-2">
                    <Button
                        onClickFn={onConfirm}
                        bgColor='bg-red-600 hover:bg-red-700'
                        textColor='text-white'
                    >
                        Delete
                    </Button>
                    <Button
                        onClickFn={onCancle}
                        bgColor='bg-[#35373c] hover:bg-[#2f3035]'
                        textColor='text-white'
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPopup