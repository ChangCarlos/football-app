import Footer from "../components/Footer"
import { MainHeader } from "../components/Header"
import Section from "../components/Section"

function Home() {

    return (
        <>
            <MainHeader title="Domine o Jogo. Estude Cada Jogada." />
            <div className="flex flex-col h-screen">
                <Section
                    title="Jogadas Ofensivas"
                    items={[
                        { label: "Corrida", path: "/run" },
                        { label: "Passe", path: "/pass" }
                    ]}
                />
                <Section
                    title="Jogadas Defensivas"
                    items={[
                        { label: "Zone", path: "/zone" },
                        { label: "Man Coverage", path: "/man" },
                        { label: "Blitz", path: "/blitz" }
                    ]}
                />
            </div>
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />

        </>
    )
}

export default Home