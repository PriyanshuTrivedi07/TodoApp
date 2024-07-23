import React from 'react'

function Input({
    type = 'text',
    placeholder = '',
    onClick,
    onChange,
    className = '',
    value,
    ...props
}) {
    return (

        <input
            type={type}
            placeholder={placeholder}
            className={`w-full  font-medium text-gray-700 dark:text-white outline-none duration-150 bg-transparent ${className}`}
            onClick={onClick}
            value={value}
            onChange={onChange}
            {...props}
        />

    )
}

export default Input