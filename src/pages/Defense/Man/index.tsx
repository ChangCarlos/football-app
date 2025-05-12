import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Formation from "../Formation";

const ManCoverage = () => {
    const plays34 = [
        {
            url: "src/assets/def/34/man/cover-1-hole.png",
            name: "Cover 1 Hole",
            concept: "3-4",
        }
    ]

    const plays44 = [
        {
            url: "src/assets/def/44/man/cover-1.png",
            name: "Cover 1",
            concept: "4-4",
        }
    ]

    return (
        <>
            <SecondaryHeader title="Jogadas de Man Cover" />
            <div className="flex flex-col h-screen">
            <Formation title="3-4 Defense" items={plays34} />
            <Formation title="4-4 Defense" items={plays44} />
            </div>
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default ManCoverage;