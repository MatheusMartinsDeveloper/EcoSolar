import Link from "next/link"

export default function Header() {
    return (
        <header className="sticky top-0 flex justify-center items-center w-full bg-white py-5 border-b border-gray-200 z-50">
            <div className="flex justify-between items-center w-2/3">
                <div className="flex items-center gap-3">
                    <h1 className="text-white text-sm font-poppins font-semibold bg-linear-to-r from-(--color-green) to-(--color-blue) rounded-lg py-2 px-3">ES</h1>
                    <h1 className="text-black text-xl font-poppins font-semibold">EcoSolar</h1>
                </div>
                <nav className="flex justify-around items-center w-1/2">
                    <Link 
                        href={""}
                        className="text-gray-600 text-sm font-roboto font-medium transition-all delay-100 hover:text-(--color-green)"
                    >Início</Link>
                    <Link 
                        href={""}
                        className="text-gray-600 text-sm font-roboto font-medium transition-all delay-100 hover:text-(--color-green)"
                        >Sobre</Link>
                    <Link 
                        href={""}
                        className="text-gray-600 text-sm font-roboto font-medium transition-all delay-100 hover:text-(--color-green)"
                    >Serviços</Link>
                    <Link 
                        href={""}
                        className="text-gray-600 text-sm font-roboto font-medium transition-all delay-100 hover:text-(--color-green)"   
                    >Depoimentos</Link>
                    <Link 
                        href={""}
                        className="text-gray-600 text-sm font-roboto font-medium transition-all delay-100 hover:text-(--color-green)"
                    >Contato</Link>
                </nav>
                <div>
                    <Link 
                        href={""}
                        className="text-white text-sm font-poppins font-thin bg-linear-to-r from-(--color-green) to-(--color-blue) rounded-md py-1.5 px-5 transition-all delay-100 hover:opacity-80"
                    >Solicite Orçamento</Link>
                </div>
            </div>
        </header>
    )
}