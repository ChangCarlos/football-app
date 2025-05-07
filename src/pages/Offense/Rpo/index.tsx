import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Personnel from "../Personnel";



const Rpo = () => {
    const rpoPlays = [
        {
            url: "src/assets/rpo/rpo-zone-peek.png",
            name: "RPO Zone Peek",
            concept: "Spread",
        },
        {
            url: "src/assets/rpo/rpo-zone-peek.png",
            name: "RPO Zone Peek",
            concept: "Spread",
        },
        {
            url: "src/assets/rpo/rpo-zone-peek.png",
            name: "RPO Zone Peek",
            concept: "Spread",
        },
        {
            url: "src/assets/rpo/rpo-zone-peek.png",
            name: "RPO Zone Peek",
            concept: "Spread",
        },
        {
            url: "src/assets/rpo/rpo-zone-peek.png",
            name: "RPO Zone Peek",
            concept: "Spread",
        },
        {
            url: "src/assets/rpo/rpo-zone-peek.png",
            name: "RPO Zone Peek",
            concept: "Spread",
        }
    ];

    return (
        <>
            <SecondaryHeader title="Jogadas de RPO" />
            <Personnel title="RPO" items={rpoPlays} />
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Rpo;