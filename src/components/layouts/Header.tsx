import { MdContactPhone } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";
import { MdCategory } from "react-icons/md";

const styles={
    button:"flex w-17 h-17 border border-white rounded-full items-center justify-center bg-background p-2 m-auto text-primary shadow-md group-hover:scale-110 group-hover:bg-[#82d9b6] group-hover:cursor-pointer transition-transform",
    div:"w-35 p-2 h-35 hover:underline group-hover:scale-105 hover:text-primary hover:cursor-pointer transi tion-transform group",
    text:"text-center font-semibold text-first py-2.5"
}

function Header(){
    return(
        <div className="bg-secondary/100 flex gap-64">
            <div className={`${styles.div}  ml-16`}>
                <button className={styles.button}><MdContactPhone size={45}/></button>
                <p className={styles.text}>Ver Proveedores Registrados</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><MdFactCheck size={45}/></button>
                <p className={styles.text}>Solicitudes de Insumos</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><MdMedicalServices size={45}/></button>
                <p className={styles.text}>Ver Existencias</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><MdCategory size={45}/></button>
                <p className={styles.text}>Categorias de Insumos</p>
            </div>
        </div>
    );
}
export default Header;