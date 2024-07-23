import React from 'react'

function Button({
    children,
    btnType = "button",
    textColor,
    bgColor = "bg-gray-50 dark:bg-zinc-800 dark:hover:bg-[#303030]",
    onClickFn,
    className = "",
    ...props

}) {
  return (
    <button
        type={btnType}
        onClick={onClickFn}
        className={` inline-flex px-2 py-1 rounded-lg shadow-md text-sm border border-black/10 dark:border-white/10 justify-center active:scale-95 items-center duration-150 shrink-0 ${bgColor} ${textColor} ${className}`}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button