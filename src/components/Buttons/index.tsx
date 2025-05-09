interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer w-20 bg-green-900 text-white p-2 font-medium text-sm rounded mt-2 mb-2"
        >
            {text}
        </button>
    )
}

export default Button;