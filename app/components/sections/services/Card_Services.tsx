import Image from "next/image";
import Link from "next/link";
import { CardServicesType } from "@/app/types/card_services";

export default function CardServices({ image, span, title, description, benefits, benefits2, benefits3, benefits4, benefits5 }: CardServicesType) { 
    return (
        <div className="flex flex-col items-center gap-5 w-full bg-white shadow-2xl rounded-2xl pb-10">
            <div className="flex flex-col gap-4">
                <div className="relative aspect-video">
                    <Image
                        src={image}
                        alt="Image"
                        fill
                        className="rounded-tl-2xl rounded-tr-2xl"
                    />
                    <span className="absolute top-3 right-3 bg-white rounded-full p-2 text-gray-700 text-sm font-poppins">{span}</span>
                </div>
                <div className="flex flex-col gap-4 p-5">
                    <h3 className="text-(--color-dark-blue) text-xl font-poppins">{title}</h3>
                    <p className="text-gray-600 text-base font-roboto font-normal">{description}</p>
                    <div className="flex flex-col gap-2">
                        <span className="text-(--color-green)">✓ <span className="text-gray-600 text-sm font-roboto font-normal pl-2">{benefits}</span></span>
                        <span className="text-(--color-green)">✓ <span className="text-gray-600 text-sm font-roboto font-normal pl-2">{benefits2}</span></span>
                        <span className="text-(--color-green)">✓ <span className="text-gray-600 text-sm font-roboto font-normal pl-2">{benefits3}</span></span>
                        <span className="text-(--color-green)">✓ <span className="text-gray-600 text-sm font-roboto font-normal pl-2">{benefits4}</span></span>
                        <span className="text-(--color-green)">✓ <span className="text-gray-600 text-sm font-roboto font-normal pl-2">{benefits5}</span></span>
                    </div>
                </div>
            </div>
            <div className="w-10/12 bg-linear-to-r from-(--color-green) to-(--color-blue) rounded-md p-3 text-center">
                <Link 
                    href={""}
                    className="w-full text-white text-base font-poppins font-semibold"
                >Solicitar Orçamento</Link>
            </div>
        </div>
    )
}