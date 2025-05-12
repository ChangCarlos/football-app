import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Personnel from "../Personnel";


const Pass = () => {
    const shotgunPlays = [
        {
            url: "src/assets/quick-slants.png",
            name: "Quick Slants",
            concept: "12 Personnel",
        },
        {
            url: "src/assets/te-under.png",
            name: "TE Under",
            concept: "12 Personnel",
        }
    ];
    const pistolPlays = [
        {
            url: "src/assets/spacing.png",
            name: "Spacing",
            concept: "11 Personnel",
        },
        {
            url: "src/assets/verts.png",
            name: "Four Verticals",
            concept: "11 Personnel",
        }
    ];
    const iformPlays = [
        {
            url: "src/assets/mesh.png",
            name: "Mesh",
            concept: "21 Personnel",
        },
        {
            url: "src/assets/quick-slants-i.png",
            name: "Quick Slants",
            concept: "21 Personnel",
        }
    ];

    return (
        <>
            <SecondaryHeader title="Jogadas de Passe" />
            <div className="flex flex-col h-full">
                <Personnel title="Shotgun" items={shotgunPlays} />
                <Personnel title="Pistol" items={pistolPlays} />
                <Personnel title="I-Form" items={iformPlays} />
            </div>
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Pass;