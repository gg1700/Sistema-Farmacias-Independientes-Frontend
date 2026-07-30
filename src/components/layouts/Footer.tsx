import { LuCross } from "react-icons/lu";
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const styles={
    icons:"flex w-10 h-10 border border-white rounded-full items-center justify-center hover:scale-110 hover:cursor-pointer hover:bg-white hover:text-sidebar transition-transform"
}

function Footer(){
    return(
        <footer className="bg-sidebar text-white px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center justify-center">
                <div className={`${styles.icons} w-15 h-15`}><LuCross size={60}/></div>
                <div className="ml-5 mt-1">© 2026 Farmacia Angelica — Sistema de Gestión de Compras e Inventario <br/> Versión 1.0 | Soporte técnico:  losvikingosnoruegos@gmail.com</div> 
            </div>
            <div className="flex gap-4 ml-170 mt-3 px-4">
                <div className={styles.icons}><FaInstagram size={30}/></div>
                <div className={styles.icons}><FaFacebook size={30}/></div>
                <div className={styles.icons}><FaTiktok size={30}/></div>
            </div>
        </footer>
    )
}
export default Footer;