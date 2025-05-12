import Button from "../Buttons";
import { CreateAccountForm, LoginForm } from "../Form";

interface ModalProps {
    onClose: () => void;
}

export const LogInModal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-10">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 w-2/3 border-none rounded-xl p-4 z-20 md:w-1/3 lg:w-1/5">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold text-white">Login</h1>
                    <Button onClick={onClose} text="Fechar" />
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export const SignInModal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-10">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 w-2/3 border-none rounded-xl p-4 z-20 md:w-1/3 lg:w-1/5">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold text-white">Cadastro</h1>
                    <Button onClick={onClose} text="Fechar" />
                </div>
                <CreateAccountForm />
            </div>
        </div>
    )
}
