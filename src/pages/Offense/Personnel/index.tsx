import { NavLink } from "react-router";

interface PersonnelProps {
    title: string;
    items: {
        label: string;
        path: string;
    }[];
}

const Personnel: React.FC<PersonnelProps> = ({ items, title }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 mb-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="flex flex-wrap mt-4 space-x-1 space-y-2 justify-center items-center ">
                {items.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className="p-4 w-1/5 border rounded-lg text-center text-xs font-semibold bg-gray-200"
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>

            <div className="flex flex-col mt-8 items-center space-y-2">
                <p>
                    No futebol americano, os personnel packages (ou agrupamentos de personnel) são conjuntos de jogadores ofensivos que indicam o tipo de posições de habilidade (running backs, tight ends e wide receivers) utilizados em determinada jogada.
                </p>
                <p>
                    Eles são representados por um sistema de dois dígitos:
                </p>
                <ul className="list-disc px-4">
                    <li>O primeiro número indica a quantidade de running backs (RBs) em campo.</li>
                    <li>O segundo número representa a quantidade de tight ends (TEs).</li>
                    <li>Os jogadores restantes são wide receivers (WRs).</li>
                </ul>
            </div>
        </div>
    )
}

export default Personnel;