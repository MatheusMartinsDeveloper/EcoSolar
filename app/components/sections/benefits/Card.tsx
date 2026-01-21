import { CardBenefitsType } from "@/app/types/card_benefits"

export default function Card({ icon, title, description }: CardBenefitsType) {
    return (
        <div className="w-full p-5 border border-gray-200 rounded-xl shadow-2xl transition-all delay-100 hover:border-(--color-green) group">
            <div className="flex flex-col gap-5">
                <div className="transition-all delay-100 group-hover:scale-105">
                    <span className="text-4xl">{icon}</span>
                </div>
                <div>
                    <h1 className="text-(--color-dark-blue) text-xl font-poppins">{title}</h1>
                </div>
                <div>
                    <p className="text-gray-500 text-base font-roboto">{description}</p>
                </div>
            </div>
        </div>
    )
}