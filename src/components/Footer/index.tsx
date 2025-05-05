import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

interface FooterProps {
    about: string;
    contact: string;
    privacy: string;
}

const Footer: React.FC<FooterProps> = ({ about, contact, privacy }) => {
    return (
        <div className="flex flex-col space-y-6 justify-between items-center p-4 bg-black text-white text-xs absolute bottom-0 w-full">
            <div className="flex space-x-4">
                <a>{about}</a>
                <a>{contact}</a>
                <a>{privacy}</a>
            </div>
            <div className="flex space-x-4">
                <FaFacebook size={18} />
                <FaX size={18} />
                <FaInstagram size={18} />
            </div>
        </div>
    )
}

export default Footer;