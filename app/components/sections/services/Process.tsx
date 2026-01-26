import Heading from "../../shared/Heading"
import CardProcess from "./Card_Process"

export default function Process() {
    return (
        <div className="flex flex-col items-center gap-7">
            <Heading
                title="Como Funciona Nosso Processo"
                description="Do primeiro contato até a ativação do seu sistema, cuidamos de tudo para você."
            />
            <div className="flex justify-between items-center gap-3 w-full">
                <CardProcess 
                    number="1"
                    title="Consulta Inicial"
                    description="Análise do seu consumo e visita técnica para dimensionamento do sistema ideal."
                />
                <CardProcess 
                    number="2"
                    title="Projeto Personalizado"
                    description="Desenvolvimento do projeto técnico e simulação de economia personalizada."
                />
                <CardProcess 
                    number="3"
                    title="Instalação"
                    description="Instalação profissional realizada por equipe técnica certificada e experiente."
                />
                <CardProcess 
                    number="4"
                    title="Ativação"
                    description="Conexão à rede elétrica e ativação do sistema para começar a gerar economia."
                />
            </div>
        </div>
    )
}