import { BsPersonLinesFill, BsCardChecklist } from 'react-icons/bs';
import { FaMedkit, FaShapes } from 'react-icons/fa';

const styles={
    button:"flex w-17 h-17 border border-white rounded-full items-center justify-center bg-background p-2 m-auto text-primary",
    div:"w-35 p-2",
    text:"text-center font-semibold text-first"
}

function Header(){
    return(
        <div className="bg-secondary/100 flex gap-50">
            <div className={`${styles.div}  ml-16`}>
                <button className={styles.button}>< BsPersonLinesFill size={50}/></button>
                <p className={styles.text}>Ver Proveedores Registrados</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><BsCardChecklist size={50}/></button>
                <p className={styles.text}>Solicitudes de Insumos</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><FaMedkit size={50}/></button>
                <p className={styles.text}>Ver Existencias</p>
            </div>
            <div className={styles.div}>
                <button className={styles.button}><FaShapes size={50}/></button>
                <p className={styles.text}>Categorias de Insumos</p>
            </div>
        </div>
    );
}
export default Header;