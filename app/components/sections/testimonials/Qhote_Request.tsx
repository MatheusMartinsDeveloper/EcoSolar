import Link from "next/link";

export default function QhoteRequest() {
    return (
        <div className="flex flex-col items-center gap-7 w-full">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-(--color-dark-blue) text-2xl font-poppins font-semibold">Pronto para se juntar aos nossos clientes satisfeitos?</h2>
                <p className="text-gray-600 text-lg font-roboto">Solicite seu orçamento gratuito e descubra quanto você pode economizar com energia solar.</p>
            </div>
            <div>
                <Link 
                    href={""}
                    className="text-white text-base font-poppins font-semibold bg-linear-to-r from-(--color-green) to-(--color-blue) py-3 px-5 rounded-md transition-all delay-100 hover:opacity-80"    
                >Solicitar Orçamento Gratuito →</Link>
            </div>
        </div>
    )
}