interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className="cursor-pointer w-20 bg-green-900 text-white p-2 font-medium text-sm rounded mt-4 hover:bg-green-800 transition duration-300">
            {text}
        </button>
    )
}

export default Button;