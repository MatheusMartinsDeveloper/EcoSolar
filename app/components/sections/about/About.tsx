import History from "./History"
import CardRow from "./Card_Row"

export default function About() {
    return (
        <section className="flex flex-col justify-center items-center gap-14 w-full py-10 bg-gray-50">
            <History />
            <CardRow />
        </section>
    )
}