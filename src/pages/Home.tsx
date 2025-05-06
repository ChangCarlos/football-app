import Footer from "../components/Footer"
import Header from "../components/Header"
import Section from "../components/Section"

function Home() {

    return (
        <>
            <Header title="Domine o Jogo. Estude Cada Jogada." />
            <Section
                title="Jogadas Ofensivas"
                items={[
                    { label: "Corrida", path: "/run" },
                    { label: "Passe", path: "/pass" },
                    { label: "RPO", path: "/rpo" }
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
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Home