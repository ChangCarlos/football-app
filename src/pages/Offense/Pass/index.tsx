import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Personnel from "../Personnel";


const Pass = () => {
    const passPlays = [
        {
            url: "src/assets/pass/curls.png",
            name: "Curls",
            concept: "Spread",
        },
        {
            url: "src/assets/pass/post.png",
            name: "Post",
            concept: "Spread",
        },
        {
            url: "src/assets/pass/verts.png",
            name: "Four Verticals",
            concept: "Spread",
        },
        {
            url: "src/assets/pass/curls.png",
            name: "Curls",
            concept: "Spread",
        },
        {
            url: "src/assets/pass/post.png",
            name: "Post",
            concept: "Spread",
        },
        {
            url: "src/assets/pass/verts.png",
            name: "Four Verticals",
            concept: "Spread",
        }
    ];

    return (
        <>
            <SecondaryHeader title="Jogadas de Passe" />
            <Personnel title="Spread" items={passPlays} />
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Pass;