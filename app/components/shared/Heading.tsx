import { HeadingType } from "@/app/types/heading"

export default function Heading({ title, description }: HeadingType) {
    return (
        <div className="flex flex-col items-center gap-5 w-2/3 text-center">
            <h1 className="text-(--color-dark-blue) text-4xl font-poppins font-semibold">{title}</h1>
            <p className="text-gray-500 text-xl font-roboto font-normal">{description}</p>
        </div>
    )
}