import { MdContactPhone, MdFactCheck, MdMedicalServices, MdCategory } from "react-icons/md";

const styles = {
    container: "bg-secondary/100 flex justify-around items-start w-full py-2",
    button: "flex w-14 h-14 border border-white rounded-full items-center justify-center bg-background p-2 m-auto text-primary shadow-md group-hover:scale-110 group-hover:bg-[#82d9b6] group-hover:cursor-pointer transition-transform",
    div: "flex flex-col items-center w-32 hover:underline group-hover:scale-105 hover:text-primary hover:cursor-pointer transition-transform group",
    text: "text-center font-semibold text-first py-1.5 text-sm",
}

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <button className={styles.button}><MdContactPhone size={32} /></button>
                <p className={styles.text}>Ver Proveedores Registrados</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><MdFactCheck size={32} /></button>
                <p className={styles.text}>Solicitudes de Insumos</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><MdMedicalServices size={32} /></button>
                <p className={styles.text}>Ver Existencias</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><MdCategory size={32} /></button>
                <p className={styles.text}>Categorias de Insumos</p>
            </div>
        </div>
    );
}

export default Header;