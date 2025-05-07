import Footer from "../../../components/Footer"
import { SecondaryHeader } from "../../../components/Header"
import Formation from "../Formation"

const ZoneCoverage = () => {
    const zoneCoverPlays = [
        {
            url: "src/assets/cover-zone/cover-3-sky.png",
            name: "Cover 3 Sky",
            concept: "Zone Coverage",
        },
        {
            url: "src/assets/cover-zone/cover-3-cloud.png",
            name: "Cover 3 Cloud",
            concept: "Zone Coverage",
        },
        {
            url: "src/assets/cover-zone/cover-3-sky.png",
            name: "Cover 3 Sky",
            concept: "Zone Coverage",
        },
        {
            url: "src/assets/cover-zone/cover-3-cloud.png",
            name: "Cover 3 Cloud",
            concept: "Zone Coverage",
        },        {
            url: "src/assets/cover-zone/cover-3-sky.png",
            name: "Cover 3 Sky",
            concept: "Zone Coverage",
        },
        {
            url: "src/assets/cover-zone/cover-3-cloud.png",
            name: "Cover 3 Cloud",
            concept: "Zone Coverage",
        }
    ]
    return (
        <>
            <SecondaryHeader title="Jogadas de Zone Coverage" />
            <Formation title="4-3 Defense" items={zoneCoverPlays} />
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default ZoneCoverage;