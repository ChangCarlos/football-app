import { FaFootballBall } from "react-icons/fa";
import Button from "../Buttons";

interface HeaderProps {
    title: string;
}

export const MainHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="bg-[url('./assets/bg-header.png')] bg-cover bg-center">
            <div className="flex justify-end px-6 ">
                <Button text="Entrar" />
            </div>
            <div className="flex flex-col w-4/5 p-6">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <Button text="Explore" />
            </div>
        </div>
    )
}

export const SecondaryHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="bg-[url('./assets/bg-header.png')] bg-cover flex items-center space-x-3 p-4">
            <FaFootballBall size={24} color="white" />
            <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
    )
}

// This code defines a functional React component called Header. It takes a single prop, title, which is a string. The component returns a header element that contains an h1 element displaying the title and a button with the text "Explore". The button has some styling applied to it, including background color, text color, padding, rounded corners, and hover effects. The component is exported as the default export of the module.