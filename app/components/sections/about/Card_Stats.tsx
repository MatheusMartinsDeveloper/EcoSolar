import { CardStatsType } from "@/app/types/card_stats"

export default function CardStats({ stats, color, title }: CardStatsType) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-lg">
            <div className="flex flex-col gap-2">
                <span className={`text-${color} text-3xl font-poppins font-semibold`}>{stats}</span>
                <span className="text-gray-600 text-base font-roboto font-normal">{title}</span>
            </div>
        </div>
    )
}