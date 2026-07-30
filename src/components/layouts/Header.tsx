import { useNavigate } from 'react-router-dom';
import { MdContactPhone, MdFactCheck, MdMedicalServices, MdCategory } from "react-icons/md";

const styles = {
    container: "bg-secondary/100 flex justify-around items-start w-full py-2",
    button: "flex w-14 h-14 border border-white rounded-full items-center justify-center bg-background p-2 m-auto text-primary shadow-md group-hover:scale-110 group-hover:bg-[#82d9b6] group-hover:cursor-pointer transition-transform",
    div: "flex flex-col items-center w-32 hover:underline group-hover:scale-105 hover:text-primary hover:cursor-pointer transition-transform group",
    text: "text-center font-semibold text-first py-1.5 text-sm",
}

interface HeaderShortcut {
    label: string;
    icon: React.ElementType;
    path: string | null;
}

const shortcuts: HeaderShortcut[] = [
    { label: "Ver Proveedores Registrados", icon: MdContactPhone, path: "/suppliers/manage" },
    { label: "Solicitudes de Insumos", icon: MdFactCheck, path: "/inventory/requests" },
    { label: "Ver Existencias", icon: MdMedicalServices, path: "/purchases/list" },
    { label: "Categorias de Insumos", icon: MdCategory, path: "/inventory/categories" },
]

function Header() {
    const navigate = useNavigate();

    function handleNavigate(path: string | null) {
        if (path) {
            navigate(path);
        }
    }

    return (
        <div className={styles.container}>
            {shortcuts.map((shortcut) => {
                const Icon = shortcut.icon;
                return (
                    <div key={shortcut.label} className={styles.div} onClick={() => handleNavigate(shortcut.path)} title={shortcut.label}>
                        <button type="button" className={styles.button} disabled={!shortcut.path} title={shortcut.label}>
                            <Icon size={32} />
                        </button>
                        <p className={styles.text}>{shortcut.label}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Header;