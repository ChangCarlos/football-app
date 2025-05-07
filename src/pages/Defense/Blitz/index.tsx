import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Formation from "../Formation";

const Blitz = () => {
    const blitzPlays = [
        {
            url: "src/assets/blitz/lb-dogs.png",
            name: "LB Dogs",
            concept: "7-man Blitz",
        },
        {
            url: "src/assets/blitz/lb-dogs.png",
            name: "LB Dogs",
            concept: "7-man Blitz",
        },
        {
            url: "src/assets/blitz/lb-dogs.png",
            name: "LB Dogs",
            concept: "7-man Blitz",
        },
        {
            url: "src/assets/blitz/lb-dogs.png",
            name: "LB Dogs",
            concept: "7-man Blitz",
        },
        {
            url: "src/assets/blitz/lb-dogs.png",
            name: "LB Dogs",
            concept: "7-man Blitz",
        },
                {
            url: "src/assets/blitz/lb-dogs.png",
            name: "LB Dogs",
            concept: "7-man Blitz",
        }
    ]

    return (
        <>
            <SecondaryHeader title="Jogadas de Blitz" />
            <Formation title="4-3 Defense" items={blitzPlays} />
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Blitz;