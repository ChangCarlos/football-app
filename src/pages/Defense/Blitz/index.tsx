import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Formation from "../Formation";

const Blitz = () => {
    const plays34 = [
        {
            url: "/images/ss-blitz.png",
            name: "SS Blitz",
            concept: "3-4",
        },
        {
            url: "/images/sting-pinch.png",
            name: "Sting Pinch",
            concept: "3-4",
        }
    ]

    const plays44 = [
        {
            url: "/images/engage-eight.png",
            name: "Engage Eight",
            concept: "4-4",
        },
        {
            url: "/images/FS-blitz.png",
            name: "FS Blitz",
            concept: "4-4",
        }
    ]

    return (
        <>
            <SecondaryHeader title="Jogadas de Blitz" />
            <div className="flex flex-col h-screen">
                <Formation title="3-4 Defense" items={plays34} />
                <Formation title="4-4 Defense" items={plays44} />
            </div>
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Blitz;