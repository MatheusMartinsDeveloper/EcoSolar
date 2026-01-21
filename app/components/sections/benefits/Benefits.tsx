import Heading from "../../shared/Heading"
import Card from "./Card"

export default function Benefits() {
    return (
        <section className="flex flex-col justify-center items-center gap-14 w-full h-screen">
            <div className="flex justify-center">
                <Heading
                    title="Por que escolher a EcoSolar?"
                    description="Oferecemos soluções completas em energia solar com a melhor tecnologia do mercado, garantindo máxima eficiência e economia para sua residência ou empresa."
                />
            </div>
            <div className="grid grid-cols-3 gap-7 w-4/6">
                <Card
                    icon={"💡"}   
                    title="Economia Garantida"
                    description="Reduza sua conta de luz em até 95% com nossos sistemas de alta eficiência e tecnologia de ponta."
                />
                <Card
                    icon={"🌍"}   
                    title="Sustentabilidade"
                    description="Contribua para um planeta mais limpo gerando sua própria energia renovável e reduzindo a pegada de carbono."
                />
                <Card
                    icon={"🔧"}   
                    title="Instalação Profissional"
                    description="Equipe técnica especializada e certificada para garantir a melhor instalação e performance do seu sistema."
                />
                <Card
                    icon={"📱"}   
                    title="Monitoramento Inteligente"
                    description="Acompanhe a geração e consumo de energia em tempo real através do nosso app exclusivo."
                />
                <Card
                    icon={"🛡️"}   
                    title="Garantia Estendida"
                    description="25 anos de garantia nos painéis solares e 10 anos nos inversores para sua total tranquilidade."
                />
                <Card
                    icon={"💰"}   
                    title="Financiamento Facilitado"
                    description="Parcelamento em até 120x e linhas de crédito especiais para energia solar com taxas reduzidas."
                />
            </div>
        </section>
    )
}