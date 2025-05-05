import Footer from "./components/Footer"
import Header from "./components/Header"
import Section from "./components/Section"

function App() {

  return (
    <>
      <Header title="Domine o Jogo. Estude Cada Jogada." />
      <Section title="Jogadas Ofensivas" subtitle="Run" subtitle2="Pass" subtitle3="RPO" />
      <Section title="Jogadas Defensivas" subtitle="Zone" subtitle2="Man Coverage" subtitle3="Blitz" />
      <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
    </>
  )
}

export default App
