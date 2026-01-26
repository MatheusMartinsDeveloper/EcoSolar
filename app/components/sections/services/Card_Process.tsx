import { CardProcessType } from "@/app/types/card_process"

export default function CardProcess({ number, title, description }: CardProcessType) {
    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex justify-center items-center w-16 h-16 bg-linear-to-r from-(--color-green) to-(--color-blue) rounded-full">
                    <span className="text-white font-poppins font-semibold">{number}</span>
                </div>
                <h3 className="text-(--color-dark-blue) text-lg font-poppins">{title}</h3>
                <p className="text-gray-600 text-base font-roboto font-normal">{description}</p>
            </div>
        </div>
    )
}