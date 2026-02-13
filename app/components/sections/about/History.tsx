import Image from "next/image";
import CardStats from "./Card_Stats";

export default function History() {
    return (
        <div className="flex justify-between w-4/6">
            <div className="flex flex-col gap-5 w-1/2">
                <div className="flex flex-col gap-5">
                    <div>
                        <span className="text-blue-800 text-sm font-poppins bg-blue-100 rounded-full py-2 px-3">🏆 Líderes em Energia Solar</span>
                    </div>
                    <div>
                        <h2 className="text-gray-900 text-4xl font-poppins font-semibold">Mais de 10 anos transformando o futuro energético do Brasil</h2>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg font-roboto font-normal">A EcoSolar nasceu com a missão de democratizar o acesso à energia solar no Brasil.
                        Desde 2013, já instalamos mais de 500 sistemas fotovoltaicos,
                        ajudando famílias e empresas a economizarem milhões de reais em energia elétrica.</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg font-roboto font-normal">Nossa equipe é formada por engenheiros especializados, técnicos certificados e profissionais apaixonados por energia renovável.
                        Trabalhamos apenas com equipamentos de primeira linha e oferecemos suporte completo desde o projeto até a manutenção.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <CardStats
                        stats="10+"
                        color="(--color-green)"
                        title="Anos de Experiência"
                    />
                    <CardStats
                        stats="500+"
                        color="(--color-blue)"
                        title="Projetos Concluídos"
                    />
                    <CardStats
                        stats="50+"
                        color="(--color-green)"
                        title="Cidades Atendidas"
                    />
                    <CardStats
                        stats="98%"
                        color="(--color-blue)"
                        title="Clientes Satisfeitos"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-2/5">
                <div className="relative col-span-2 h-auto">
                    <Image
                        src="/eco_solar_technology.png"
                        alt="Imagem principal"
                        fill
                        className="object-cover rounded-xl"
                        priority
                    />
                </div>

                <div className="relative h-auto">
                    <Image
                        src="/eco_solar_technology_2.png"
                        alt="Imagem secundária 1"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                <div className="relative h-auto">
                    <Image
                        src={"/eco_solar_technology_3.png"}
                        alt="Imagem secundária 2"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}