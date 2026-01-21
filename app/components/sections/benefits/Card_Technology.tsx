import Image from "next/image"

export default function CardTechnology() {
    return (
        <div className="w-full p-8 rounded-2xl shadow-2xl bg-linear-to-r from-green-50 to-blue-50">
            <div className="flex justify-around items-center w-full">
                <div className="flex flex-col gap-5 w-2/5">
                    <h3 className="text-(--color-dark-blue) text-2xl font-poppins font-semibold">Tecnologia de Última Geração</h3>
                    <p className="text-gray-600 text-base font-roboto font-light">Utilizamos apenas equipamentos de marcas reconhecidas mundialmente,
                        com certificações internacionais e a mais alta eficiência energética disponível no mercado.</p>
                    <div>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-600 text-base font-roboto font-normal"><span className="text-(--color-green)">✓</span>Painéis solares monocristalinos de alta eficiência</li>
                            <li className="flex items-center gap-3 text-gray-600 text-base font-roboto font-normal"><span className="text-(--color-green)">✓</span>Inversores com tecnologia MPPT avançada</li>
                            <li className="flex items-center gap-3 text-gray-600 text-base font-roboto font-normal"><span className="text-(--color-green)">✓</span>Sistema de monitoramento em tempo real</li>
                            <li className="flex items-center gap-3 text-gray-600 text-base font-roboto font-normal"><span className="text-(--color-green)">✓</span>Estruturas de fixação resistentes a intempéries</li>
                        </ul>
                    </div>
                </div>
                <div className="relative w-1/3 h-96">
                    <Image
                        src={"/eco_solar_technology.png"}
                        alt="Image Technology"
                        fill
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}