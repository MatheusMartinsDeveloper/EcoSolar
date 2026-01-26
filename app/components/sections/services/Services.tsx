import Heading from "../../shared/Heading";
import CardServices from "./Card_Services";
import Process from "./Process";

export default function Services() {
    return (
        <section className="flex flex-col items-center gap-7 w-full">
            <div className="flex justify-center">
                <Heading
                    title="Nossos Serviços"
                    description="Oferecemos soluções completas em energia solar, desde o projeto inicial até a manutenção contínua do seu sistema fotovoltaico."
                />
            </div>
            <div className="flex justify-between items-center gap-3 w-4/6">
                <CardServices 
                    image="/eco_solar_technology.png"
                    span="A partir de R$ 15.900"
                    title="Energia Solar Residencial"
                    description="Sistemas fotovoltaicos completos para residências, com projeto personalizado e instalação profissional."
                    benefits="Projeto personalizado para sua residência"
                    benefits2="Instalação completa em até 3 dias"
                    benefits3="Monitoramento via aplicativo"
                    benefits4="Garantia de 25 anos nos painéis"
                    benefits5="Suporte técnico especializado"
                />
                <CardServices 
                    image="/eco_solar_technology.png"
                    span="Consulte nossos especialistas"
                    title="Energia Solar Comercial"
                    description="Soluções em grande escala para empresas, indústrias e estabelecimentos comerciais."
                    benefits="Análise de viabilidade econômica"
                    benefits2="Projeto industrial customizado"
                    benefits3="Instalação com equipe especializada"
                    benefits4="Sistema de monitoramento avançado"
                    benefits5="Manutenção preventiva inclusa"
                />
                <CardServices 
                    image="/eco_solar_technology.png"
                    span="A partir de R$ 299/ano"
                    title="Manutenção e Suporte"
                    description="Serviços completos de manutenção preventiva e corretiva para sistemas fotovoltaicos."
                    benefits="Limpeza profissional dos painéis"
                    benefits2="Inspeção técnica completa"
                    benefits3="Verificação de performance"
                    benefits4="Relatório detalhado de funcionamento"
                    benefits5="Atendimento 24/7 para emergências"
                />
            </div>
            <div className="w-4/6 bg-gray-200 rounded-2xl p-5">
                <Process />
            </div>
        </section>
    )
}