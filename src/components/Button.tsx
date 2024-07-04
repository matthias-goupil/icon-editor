import React, { PropsWithChildren } from 'react'
import cn from "classnames"

function Button({children, classNames, onClick}: PropsWithChildren<{
    classNames?: string
    onClick?: () => void
}>) {
  return (
    <button className={cn("py-2 px-4 bg-slate-700 text-white rounded-md font-semibold hover:bg-slate-500", classNames)} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button