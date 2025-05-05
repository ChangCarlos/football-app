interface SectionProps {
    title: string;
    subtitle?: string;
    subtitle2?: string;
    subtitle3?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, subtitle2, subtitle3 }) => {
    return (
        <div className="flex flex-col p-6 mb-4">
            <h2 className="text-2xl font-semibold">
                {title}
            </h2>
            <div className="flex mt-4 space-x-4 justify-between align-center ">
                <a className="p-2 w-full border rounded-lg text-center text-xs font-semibold bg-gray-200">{subtitle}</a>
                <a className="p-2 w-full border rounded-lg text-center text-xs font-semibold bg-gray-200">{subtitle2}</a>
                <a className="p-2 w-full border rounded-lg text-center text-xs font-semibold bg-gray-200">{subtitle3}</a>
            </div>
        </div>
    )
}

export default Section;