import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaShoppingCart, FaBoxes, FaTruck, FaQuestionCircle } from 'react-icons/fa';
import { FaXmark, FaCircleXmark } from 'react-icons/fa6';

const styles = {
    container: "font-second",
    title: "px-5 py-6 font-bold text-background font-first text-xl leading-snug",
    bulletPoint: "block w-2 h-2 rounded-full bg-background",
    helpContainer: "border-t border-background/20 mt-auto",
}

const menuItemStyles = {
    button: {
        color: 'var(--color-background)',
        backgroundColor: 'transparent',
        fontWeight: 600,
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: 'var(--color-accent)',
        },
        '&.ps-active': {
            backgroundColor: 'var(--color-accent)',
        },
    },
    subMenuContent: {
        backgroundColor: 'transparent',
    },
    icon: {
        color: 'var(--color-background)',
    },
    SubMenuExpandIcon: {
        color: 'var(--color-background)',
    },
}

const helpMenuItemStyles = {
    button: {
        color: 'var(--color-background)',
        backgroundColor: 'transparent',
        fontWeight: 600,
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: 'var(--color-accent)',
        },
    },
    icon: {
        color: 'var(--color-background)',
    },
}

function BulletPoint() {
    return <span className={styles.bulletPoint} />;
}

function SidebarOptions() {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    function handleSubMenuToggle(menuName: string, isOpen: boolean) {
        setOpenSubMenu(isOpen ? menuName : null);
    }

    return (
        <Sidebar
            backgroundColor="var(--color-primary)"
            rootStyles={{
                color: 'var(--color-background)',
                border: 'none',
            }}
            className={styles.container}
        >
            <div className="flex flex-col h-full">
                <div className={styles.title}>
                    Sistema de Gestión <br /> Abastecimiento de <br /> Insumos e Inventario
                </div>
                <hr />
                <Menu menuItemStyles={menuItemStyles}>
                    <SubMenu
                        label="Adquisiciones"
                        icon={<FaShoppingCart size={18} />}
                        open={openSubMenu === 'adquisiciones'}
                        onOpenChange={(isOpen) => handleSubMenuToggle('adquisiciones', isOpen)}
                    >
                        <MenuItem icon={<BulletPoint />}> Registro </MenuItem>
                        <MenuItem icon={<BulletPoint />}> Visualizar </MenuItem>
                        <MenuItem icon={<BulletPoint />}> Reporte </MenuItem>
                    </SubMenu>

                    <SubMenu
                        label="Inventario"
                        icon={<FaBoxes size={18} />}
                        open={openSubMenu === 'inventario'}
                        onOpenChange={(isOpen) => handleSubMenuToggle('inventario', isOpen)}
                    >
                        <MenuItem icon={<BulletPoint />}> Categorias </MenuItem>
                        <MenuItem icon={<BulletPoint />}> Solicitud </MenuItem>
                    </SubMenu>

                    <SubMenu
                        label="Proveedores"
                        icon={<FaTruck size={18} />}
                        open={openSubMenu === 'proveedores'}
                        onOpenChange={(isOpen) => handleSubMenuToggle('proveedores', isOpen)}
                    >
                        <MenuItem icon={<BulletPoint />}> Gestionar </MenuItem>
                    </SubMenu>
                </Menu>

                <div className={styles.helpContainer}>
                    <Menu menuItemStyles={helpMenuItemStyles}>
                        <MenuItem icon={<FaQuestionCircle size={18} />} component={<Link to="help" />}> Ayuda </MenuItem>
                        <MenuItem icon={<FaXmark size={18} />}> Volver Atras </MenuItem>
                    </Menu>
                </div>
            </div>
        </Sidebar>
    );
}

export default SidebarOptions;