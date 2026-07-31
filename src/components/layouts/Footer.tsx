import { LuCross } from "react-icons/lu";
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const styles = {
    icons: "flex w-9 h-9 border border-white rounded-full items-center justify-center hover:scale-110 hover:cursor-pointer hover:bg-white hover:text-sidebar transition-transform",
}

const FACEBOOK_URL = "https://www.facebook.com/groups/692911985433439";

function Footer() {
    return (
        <footer className="bg-sidebar text-white px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-3 text-center md:text-left">
                <div className={styles.icons} title="Farmacia Angelica"><LuCross size={20} /></div>
                <div className="text-xs md:text-sm leading-tight">
                    © 2026 Farmacia Angelica — Sistema de Gestión de Compras e Inventario <br className="hidden md:block" /> Versión 1.0 | Soporte técnico: losvikingosnoruegos@gmail.com
                </div>
            </div>
            <div className="flex gap-3">
                <div className={styles.icons} title="Instagram"><FaInstagram size={18} /></div>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Farmacia Angelica" className={styles.icons} title="Facebook">
                    <FaFacebook size={18} />
                </a>
                <div className={styles.icons} title="TikTok"><FaTiktok size={18} /></div>
            </div>
        </footer>
    )
}
export default Footer;