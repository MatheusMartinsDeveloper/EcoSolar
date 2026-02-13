import { CardStatsType } from "@/app/types/card_stats";

export default function CardStats({ color, stats, title }: CardStatsType) {
    return (
        <div className="flex flex-col items-center w-full">
            <span className={`text-${color} text-4xl font-poppins font-semibold`}>{stats}</span>
            <span className="text-gray-600 text-lg font-roboto font-normal">{title}</span>
        </div>
    )
}