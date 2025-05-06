import { NavLink } from "react-router";

interface SectionProps {
    title: string;
    items: {
        label: string;
        path: string;
    }[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
    return (
        <div className="flex flex-col p-6 mb-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="flex mt-4 space-x-4 justify-between items-center">
                {items.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className="p-2 w-full border rounded-lg text-center text-xs font-semibold bg-gray-200"
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Section;
