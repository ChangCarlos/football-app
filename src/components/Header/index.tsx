import { FaFootballBall } from "react-icons/fa";
import Button from "../Buttons";
import { useNavigate } from "react-router";
import { LogInModal, SignInModal } from "../Modal";
import { useState } from "react";

interface HeaderProps {
    title: string;
}

export const MainHeader: React.FC<HeaderProps> = ({ title }) => {
    const [showModal, setShowModal] = useState<null | 'login' | 'signin'>(null);


    return (
        <div className="bg-[url('./assets/bg-header.png')] bg-cover bg-center">
            <div className="flex justify-end px-6 space-x-2">
                <Button text="Cadastro" onClick={() => setShowModal('signin')} />
                <Button text="Entrar" onClick={() => setShowModal('login')} />
            </div>
            <div className="flex flex-col w-4/5 p-6">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <Button text="Explore" />
            </div>

            {showModal === 'login' && <LogInModal onClose={() => setShowModal(null)}/>}
            {showModal === 'signin' && <SignInModal onClose={() => setShowModal(null)}/>}
        </div>
    )
}

export const SecondaryHeader: React.FC<HeaderProps> = ({ title }) => {
    const navigate = useNavigate();
    const returnPage = () => {
        navigate('/');
    };

    return (
        <div className="bg-[url('./assets/bg-header.png')] bg-cover flex items-center justify-between p-4">
            <div className="flex space-x-3 items-center">
                <FaFootballBall size={24} color="white" />
                <h1 className="text-xl font-bold text-white">{title}</h1>
            </div>
            <Button text="Voltar" onClick={returnPage} />
        </div>
    )
}
