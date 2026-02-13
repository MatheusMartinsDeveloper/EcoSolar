import Image from "next/image";
import { CardTestimonialsType } from "@/app/types/card_testimonials";

export default function CardTestimonials({ testimonial, benefit, photo, name, locale }: CardTestimonialsType) {
    return (
        <div className="w-full bg-white rounded-xl shadow-lg p-4 transition-all delay-100 hover:shadow-xl">
            <div className="flex flex-col gap-4">
                <div>
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <div>
                    <p className="text-gray-600 text-base font-roboto">"{testimonial}"</p>
                </div>
                <div className="bg-green-100 border border-green-300 rounded-md p-2">
                    <span className="text-green-900 text-sm font-poppins">{benefit}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Image
                        src={photo}
                        alt="Image"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="text-(--color-dark-blue) text-base font-poppins">{name}</span>
                        <span className="text-gray-600 text-sm font-roboto">{locale}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}