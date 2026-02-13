import CardStats from "./Card_Stats";

export default function Stats() {
    return (
        <div className="flex flex-col items-center gap-10 w-full bg-white shadow-lg rounded-lg p-10">
            <div className="flex flex-col items-center gap-3">
                <h2 className="text-(--color-dark-blue) text-3xl font-poppins font-semibold">Números que Comprovam Nossa Excelência</h2>
                <p className="text-gray-600 text-lg font-roboto">Resultados reais que demonstram a qualidade dos nossos serviços.</p>
            </div>
            <div className="flex justify-center items-center w-full">
                <CardStats
                    color="(--color-green)"
                    stats="98%"
                    title="Taxa de Satisfação"
                />
                <CardStats
                    color="(--color-blue)"
                    stats="R$ 2.5M"
                    title="Economia Gerada"
                />
                <CardStats
                    color="(--color-green)"
                    stats="500+"
                    title="Clientes Ativos"
                />
                <CardStats
                    color="(--color-blue)"
                    stats="24h"
                    title="Suporte Técnico"
                />
            </div>
        </div>
    )
}