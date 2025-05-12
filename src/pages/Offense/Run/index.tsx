import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Personnel from "../Personnel";


const Run = () => {
    const shotgunPlays = [
        {
            url: "src/assets/run/shotgun/inside-zone.png",
            name: "Inside Zone",
            concept: "12 Personnel",
        }
    ];
    const pistolPlays = [
        {
            url: "src/assets/run/pistol/hb-counter.png",
            name: "HB Counter",
            concept: "11 Personnel",
        },
        {
            url: "src/assets/run/pistol/hb-dive.png",
            name: "HB Dive",
            concept: "11 Personnel",
        }
    ];
    const iformPlays = [
        {
            url: "src/assets/run/iform/inside-zone-i.png",
            name: "Inside Zone",
            concept: "21 Personnel",
        },
        {
            url: "src/assets/run/iform/iso.png",
            name: "Iso",
            concept: "21 Personnel",
        }
    ];

    return (
        <>
            <SecondaryHeader title="Jogadas de Corrida" />
            <div className="flex flex-col h-full">
                <Personnel title="Shotgun" items={shotgunPlays} />
                <Personnel title="Pistol" items={pistolPlays} />
                <Personnel title="I-Form" items={iformPlays} />
            </div>
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Run;