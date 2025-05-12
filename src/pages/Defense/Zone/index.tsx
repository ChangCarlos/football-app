import Footer from "../../../components/Footer"
import { SecondaryHeader } from "../../../components/Header"
import Formation from "../Formation"

const ZoneCoverage = () => {
    const plays34 = [
        {
            url: "src/assets/cover-3-sky.png",
            name: "Cover 3 Sky",
            concept: "3-4",
        },
        {
            url: "src/assets/cover-6.png",
            name: "Cover 6",
            concept: "3-4",
        }
    ]

    const plays44 = [
        {
            url: "src/assets/cover-3.png",
            name: "Cover 3",
            concept: "4-4",
        },
        {
            url: "src/assets/cover-3-seam.png",
            name: "Cover 3 Seam",
            concept: "4-4",
        }
    ]

    return (
        <>
            <SecondaryHeader title="Jogadas de Zone Cover" />
            <div className="flex flex-col h-screen">
                <Formation title="3-4 Defense" items={plays34} />
                <Formation title="4-4 Defense" items={plays44} />
            </div>
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default ZoneCoverage;