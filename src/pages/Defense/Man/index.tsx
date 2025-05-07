import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Formation from "../Formation";

const ManCoverage = () => {
    const manCoverPlays = [
        {
            url: "src/assets/cover-man/cover-1-robber.png",
            name: "Cover 1 Robber",
            concept: "Man Coverage",
        },
        {
            url: "src/assets/cover-man/cover-2-man.png",
            name: "Cover 2 Man",
            concept: "Man Coverage",
        },
        {
            url: "src/assets/cover-man/cover-1-robber.png",
            name: "Cover 1 Robber",
            concept: "Man Coverage",
        },
        {
            url: "src/assets/cover-man/cover-2-man.png",
            name: "Cover 2 Man",
            concept: "Man Coverage",
        },
        {
            url: "src/assets/cover-man/cover-1-robber.png",
            name: "Cover 1 Robber",
            concept: "Man Coverage",
        },
        {
            url: "src/assets/cover-man/cover-2-man.png",
            name: "Cover 2 Man",
            concept: "Man Coverage",
        }
    ]

    return (
        <>
            <SecondaryHeader title="Jogadas de Man Coverage" />
            <Formation title="4-3 Defense" items={manCoverPlays} />
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default ManCoverage;