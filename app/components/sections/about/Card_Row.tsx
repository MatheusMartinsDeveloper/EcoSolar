import Card from "./Card"

export default function CardRow() {
    return (
        <div className="flex justify-between items-center gap-5 w-4/6">
            <Card
                icon="🎯"
                title="Nossa Missão"
                description="Democratizar o acesso à energia solar, proporcionando economia e sustentabilidade para todos os brasileiros através de soluções inovadoras e acessíveis."
            />
            <Card
                icon="👁️"
                title="Nossa Visão"
                description="Ser a empresa líder em energia solar no Brasil, reconhecida pela excelência em qualidade, inovação e atendimento ao cliente."
            />
            <Card
                icon="💎"
                title="Nossos Valores"
                description="Transparência, qualidade, sustentabilidade e compromisso com a satisfação total dos nossos clientes em todos os projetos."
            />
        </div>
    )
}