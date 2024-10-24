import { ReactNode } from "react"

interface ErrorMessageProps{
    children: ReactNode
}

export const ErrorMessage = ({children}: ErrorMessageProps) => {
    return (
        <div className="my-3 bg-red-100 text-center rounded-md py-2 text-red-600 font-bold">
            {children}
        </div>
    )
}
