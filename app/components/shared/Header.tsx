import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full">
            <div>
                <h1 className="text-black text-xl font-poppins font-semibold">EcoSolar</h1>
            </div>
            <nav className="flex justify-between items-center w-1/2">
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
        </header>
    )
}