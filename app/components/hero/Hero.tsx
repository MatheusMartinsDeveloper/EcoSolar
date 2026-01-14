import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="flex justify-center w-full h-screen bg-gray-100">
            <div className="flex justify-between items-center w-2/3">
                <div className="flex flex-col gap-5 w-1/2">
                    <div className="flex flex-col gap-10">
                        <div>
                            <span 
                                className="text-(--color-green) text-sm font-poppins bg-green-100 p-2 px-3 rounded-full"
                            >🌱 Energia Limpa e Sustentável</span>
                        </div>
                        <div className="text-nowrap">
                            <h1 
                                className="text-(--color-dark-blue) text-6xl font-poppins font-semibold"
                            >
                                Transforme sua casa <br /> com 
                            <span 
                                className="bg-linear-to-r from-(--color-green) to-(--color-blue) bg-clip-text text-transparent inline-block pl-5"
                            >
                                energia solar</span>
                            </h1>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xl font-roboto font-normal">Reduza sua conta de luz em até 95% e contribua para um futuro mais sustentável.
                            Soluções completas em energia solar fotovoltaica com garantia de 25 anos.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link 
                            href={""}
                            className="text-white text-base font-poppins font-semibold bg-linear-to-r from-(--color-green) to-(--color-blue) py-5 px-7 rounded-md transition-all delay-100 hover:opacity-80"
                        >Calcular Economia</Link>
                        <Link 
                            href={""}
                            className="text-gray-600 text-base font-poppins font-semibold border-2 border-gray-400 py-5 px-7 rounded-md transition-all delay-100 hover:text-(--color-green) hover:border-(--color-green)"    
                        >Saiba Mais</Link>
                    </div>
                    <div className="flex justify-between items-center w-full border-t border-gray-300 pt-10">
                        <div className="flex flex-col items-center">
                            <span className="text-(--color-green) text-2xl font-poppins font-semibold">500+</span>
                            <p className="text-gray-600 text-sm font-roboto">Projetos Instalados</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-(--color-blue) text-2xl font-poppins font-semibold">500+</span>
                            <p className="text-gray-600 text-sm font-roboto">Economia Média</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-(--color-green) text-2xl font-poppins font-semibold">25</span>
                            <p className="text-gray-600 text-sm font-roboto">Anos de Garantia</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/5">
                    <Image
                        src={"/eco_solar_hero.jpeg"}
                        alt="Hero Image"
                        width={800}
                        height={800}
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </section>
    )
}