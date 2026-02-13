import Heading from "../../shared/Heading";
import CardTestimonials from "./Card_Testimonials";
import Stats from "./Stats";
import QhoteRequest from "./Qhote_Request";

export default function Testimonials() {
    return (
        <section className="flex flex-col items-center gap-7 w-4/6 bg-gray-50">
            <Heading
                title="O que nossos clientes dizem"
                description="Mais de 500 famílias e empresas já transformaram suas vidas com energia solar.
                Veja alguns depoimentos reais dos nossos clientes satisfeitos."
            />
            <div className="grid grid-cols-3 gap-4 w-full">
                <CardTestimonials
                    testimonial="Instalei o sistema solar da EcoSolar há 2 anos e já economizei mais de R$ 8.000 na conta de luz. O atendimento foi excepcional e a instalação muito rápida. Recomendo para todos!"
                    benefit="💰 R$ 8.000 economizados"
                    photo="/testimonials/eco_solar_testimonials_1.png"
                    name="Maria Silva"
                    locale="São Paulo, SP"
                />
                <CardTestimonials
                    testimonial="Minha empresa reduziu 90% da conta de energia elétrica. O investimento se pagou em menos de 3 anos. A equipe da EcoSolar é muito profissional e o suporte pós-venda é excelente."
                    benefit="💰 90% de redução"
                    photo="/testimonials/eco_solar_testimonials_2.png"
                    name="João Santos"
                    locale="Rio de Janeiro, RJ"
                />
                <CardTestimonials
                    testimonial="Estava receosa sobre energia solar, mas a EcoSolar me explicou tudo detalhadamente. Hoje minha conta de luz é quase zero e ainda gero créditos para usar depois. Melhor investimento que já fiz!"
                    benefit="💰 Conta quase zero"
                    photo="/testimonials/eco_solar_testimonials_3.png"
                    name="Ana Costa"
                    locale="Belo Horizonte, MG"
                />
                <CardTestimonials
                    testimonial="O sistema foi instalado em apenas 2 dias e já está funcionando perfeitamente há 1 ano. O aplicativo de monitoramento é muito útil para acompanhar a geração. Estou muito satisfeito!"
                    benefit="💰 2 dias de instalação"
                    photo="/testimonials/eco_solar_testimonials_4.png"
                    name="Carlos Oliveira"
                    locale="Brasília, DF"
                />
                <CardTestimonials
                    testimonial="A EcoSolar cuidou de toda a burocracia com a concessionária. Não precisei me preocupar com nada. O sistema gera mais energia do que consumo e ainda sobra para vender. Incrível!"
                    benefit="💰 Energia excedente"
                    photo="/testimonials/eco_solar_testimonials_5.png"
                    name="Fernanda Lima"
                    locale="Porto Alegre, RS"
                />
                <CardTestimonials
                    testimonial="Financiei o sistema em 120x e a parcela é menor que o valor que economizo na conta de luz. Ou seja, o sistema se paga sozinho! A EcoSolar tornou isso possível."
                    benefit="💰 Parcela < economia"
                    photo="/testimonials/eco_solar_testimonials_6.png"
                    name="Roberto Ferreira"
                    locale="Salvador, BA"
                />
            </div>
            <Stats />
            <QhoteRequest />
        </section>
    )
}