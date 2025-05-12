interface FormationProps {
    title: string;
    items: {
        url: string;
        name: string;
        concept: string
    }[];
}

const Formation: React.FC<FormationProps> = ({ title, items }) => {
    return (
        <div className="flex flex-col items-center p-6">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="flex flex-wrap mt-4  justify-center items-center ">
                {items.map((item, index) => (
                    <div key={index} className="p-2 w-36 border rounded-lg text-center text-xs text-white font-semibold bg-gray-900 hover:scale-110 cursor-pointer transition-all duration-300">
                        <img src={item.url} alt={item.name} />
                        <p>{item.name}</p>
                        <span>{item.concept}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Formation;