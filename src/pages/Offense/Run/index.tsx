import Footer from "../../../components/Footer";
import { SecondaryHeader } from "../../../components/Header"
import Personnel from "../Personnel";

const Run = () => {
    return (
        <>
            <SecondaryHeader title="Jogadas de Corrida" />
            <Personnel 
                title="Selecione o Personnel"
                items={[
                    { label: "11", path: '/run/11' },
                    { label: "12", path: '/run/12' },
                    { label: "21", path: '/run/21' },
                    { label: "22", path: '/run/22' },
                    { label: "10", path: '/run/10' },
                    { label: "13", path: '/run/13' },
                    { label: "20", path: '/run/20' },
                    { label: "00", path: '/run/00' }
                ]}
            />
            <Footer about="Sobre" contact="Contato" privacy="Política de Privacidade" />
        </>
    )
}

export default Run;