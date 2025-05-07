import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Personnel from "../Personnel";


const Run = () => {
        const runPlays = [
            {
                url: "src/assets/run/counter.png",
                name: "HB Counter",
                concept: "Spread",
            },
            {
                url: "src/assets/run/draw.png",
                name: "HB Draw",
                concept: "Spread",
            },
            {
                url: "src/assets/run/quick-base.png",
                name: "45 Quick Base",
                concept: "Spread",
            },
            {
                url: "src/assets/run/counter.png",
                name: "HB Counter",
                concept: "Spread",
            },
            {
                url: "src/assets/run/draw.png",
                name: "HB Draw",
                concept: "Spread",
            },
            {
                url: "src/assets/run/quick-base.png",
                name: "45 Quick Base",
                concept: "Spread",
            }
        ];

    return (
        <>
            <SecondaryHeader title="Jogadas de Corrida" />
            <Personnel title="Spread" items={runPlays} />
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Run;