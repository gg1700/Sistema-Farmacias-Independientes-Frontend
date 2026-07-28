import { LuCross } from "react-icons/lu";


const styles={
    icons:"w-10 h-10 border border-white rounded-full",
}

function Footer(){
    return(
        <footer className="bg-primary text-white p-4 flex gap-4">
            <div><LuCross size={10}/></div>
            <div>© 2026 Farmacia Angelica — Sistema de Gestión de Compras e Inventario <br/> Versión 1.0 | Soporte técnico:  losvikingosnoruegos@gmail.com</div>
            <div className="flex gap-4">
                <div className={styles.icons}></div>
                <div className={styles.icons}></div>
                <div className={styles.icons}></div>
            </div>
        </footer>
    )
}
export default Footer;