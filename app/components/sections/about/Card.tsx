import { CardRowTypes } from "@/app/types/card_row";

export default function Card({ icon, title, description }: CardRowTypes) {
    return (
        <div className="bg-white p-7 rounded-xl shadow-xl">
            <div className="flex flex-col items-center gap-5 text-center">
                <span className="bg-linear-to-r from-(--color-green) to-(--color-blue) rounded-full p-3 text-2xl">{icon}</span>
                <h3 className="text-(--color-dark-blue) text-xl font-poppins font-semibold">{title}</h3>
                <p className="text-gray-600 text-base font-roboto font-normal">{description}</p>
            </div>
        </div>
    )
}