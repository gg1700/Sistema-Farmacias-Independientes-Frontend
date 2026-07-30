import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BiSolidPackage } from "react-icons/bi";
import { FaShoppingCart, FaBoxes, FaTruck, FaQuestionCircle } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const styles = {
    container: "font-second overflow-x-hidden",
    title: "px-5 py-6 font-bold text-background font-first text-xl leading-snug",
    bulletPoint: "block w-2 h-2 rounded-full bg-background",
    helpContainer: "border-t border-background/20 mt-auto",
    menuItemOption: 'hover:underline transition-colors group',
    iconBack: 'transition-tranform duration-300 group-hover:rotate-90'
}

const menuItemStyles = {
    button: {
        color: 'var(--color-background)',
        backgroundColor: 'transparent',
        fontWeight: 600,
        padding: '10px 20px',
        borderLeft: '4px solid transparent',
        transition: 'background-color 0.15s ease, border-color 0.15s ease',
        '&:hover': {
            backgroundColor: 'var(--color-accent)',
            borderLeftColor: 'var(--color-background)',
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
    }
}

const helpMenuItemStyles = {
    button: {
        color: 'var(--color-background)',
        backgroundColor: 'transparent',
        fontWeight: 600,
        padding: '10px 20px',
        borderLeft: '4px solid transparent',
        transition: 'background-color 0.15s ease, border-color 0.15s ease',
        '&:hover': {
            backgroundColor: 'var(--color-accent)',
            borderLeftColor: 'var(--color-background)',
        },
    },
    icon: {
        color: 'var(--color-background)',
    },
}

const DEFAULT_TITLE = 'Sistema de Gestión Abastecimiento de Insumos e Inventario';

const titleByPathPrefix: { prefix: string; title: string }[] = [
    { prefix: '/supply/register', title: 'Registro de Insumos Comprados' },
    { prefix: '/purchases/list', title: 'Lista de Compras Registradas' },
    { prefix: '/reports/purchases/detail', title: 'Reporte de Compras' },
    { prefix: '/reports/purchases', title: 'Filtrado y Vista Previa de Compras' },

    { prefix: '/suppliers/register', title: 'Registro de Proveedores' },
    { prefix: '/suppliers/manage', title: 'Lista de Proveedores Registrados' },
    { prefix: '/suppliers', title: 'Administracion de Proveedores' },

    { prefix: '/supply-requests/register', title: 'Registro de Solicitudes de Proveedores' },
    { prefix: '/supply-requests', title: 'Administracion de Solicitudes Proveedor' },
    { prefix: '/inventory/requests', title: 'Lista de Solicitudes Registradas' },

    { prefix: '/supply-categories/register', title: 'Registro de Categoria de Producto' },
    { prefix: '/supply-categories', title: 'Administracion de Categorias y Subcategorias' },
    { prefix: '/inventory/categories', title: 'Lista de Categorias Registradas' },

    { prefix: '/purchases/register', title: 'Registro de Compra de Productos' },

    { prefix: '/reports/suppliers/detail', title: 'Reporte de Proveedores' },
    { prefix: '/reports/suppliers', title: 'Filtrado y Vista Previa de Proveedores' },
    { prefix: '/reports/requests/detail', title: 'Reporte de Solicitudes' },
    { prefix: '/reports/requests', title: 'Filtrado y Vista Previa de Solicitudes' },

    { prefix: '/menu', title: 'Menu Principal' },
    { prefix: '/help', title: 'Ayuda' },
    { prefix: '/', title: 'Menu Principal' },
].sort((a, b) => b.prefix.length - a.prefix.length);

function getSidebarTitle(pathname: string): string {
    const match = titleByPathPrefix.find((entry) => pathname === entry.prefix || pathname.startsWith(`${entry.prefix}/`));
    return match ? match.title : DEFAULT_TITLE;
}

function BulletPoint() {
    return <span className={styles.bulletPoint} />;
}

function SidebarOptions() {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    function handleSubMenuToggle(menuName: string, isOpen: boolean) {
        setOpenSubMenu(isOpen ? menuName : null);
    }

    function isActivePath(path: string) {
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    }

    const isHomePath = location.pathname === '/';

    function handleGoBack() {
        navigate(-1);
    }

    function handleExitApp() {
        window.open('', '_self');
        window.close();
    }

    const sidebarTitle = getSidebarTitle(location.pathname);

    return (
        <Sidebar
            backgroundColor="var(--color-primary)"
            rootStyles={{
                color: 'var(--color-background)',
                border: 'none',
                overflowX: 'hidden',
            }}
            className={styles.container}
        >
            <div className="flex flex-col h-full overflow-x-hidden">
                <div className={styles.title}>
                    {sidebarTitle}
                </div>
                <hr />
                <Menu menuItemStyles={menuItemStyles}>
                    <SubMenu
                        label="Adquisiciones"
                        icon={<FaShoppingCart size={18} />}
                        title="Modulo de Adquisiciones"
                        open={openSubMenu === 'adquisiciones'}
                        onOpenChange={(isOpen) => handleSubMenuToggle('adquisiciones', isOpen)}
                    >
                        <MenuItem className={styles.menuItemOption} icon={<BulletPoint />} component={<Link to="/supply/register" />} active={isActivePath('/supply/register')} title="Registrar una nueva compra de insumos"> Registro </MenuItem>
                        <MenuItem className={styles.menuItemOption} icon={<BulletPoint />} component={<Link to="/purchases/list" />} active={isActivePath('/purchases/list')} title="Ver la lista de compras registradas"> Visualizar </MenuItem>
                        <MenuItem className={styles.menuItemOption} icon={<BulletPoint />} component={<Link to="/reports/purchases" />} active={isActivePath('/reports/purchases')} title="Filtrar y generar reporte de compras"> Reporte </MenuItem>
                    </SubMenu>

                    <SubMenu
                        label="Inventario"
                        icon={<BiSolidPackage size={18} />}
                        title="Modulo de Inventario"
                        open={openSubMenu === 'inventario'}
                        onOpenChange={(isOpen) => handleSubMenuToggle('inventario', isOpen)}
                    >
                        <MenuItem className={styles.menuItemOption} icon={<BulletPoint />} component={<Link to="/supply-categories" />} active={isActivePath('/supply-categories')} title="Gestionar categorias y subcategorias de insumos"> Categorias </MenuItem>
                        <MenuItem className={styles.menuItemOption} icon={<BulletPoint />} component={<Link to="/supply-requests" />} active={isActivePath('/supply-requests')} title="Gestionar solicitudes de insumos a proveedores"> Solicitud </MenuItem>
                    </SubMenu>

                    <SubMenu
                        label="Proveedores"
                        icon={<FaTruck size={18} />}
                        title="Modulo de Proveedores"
                        open={openSubMenu === 'proveedores'}
                        onOpenChange={(isOpen) => handleSubMenuToggle('proveedores', isOpen)}
                    >
                        <MenuItem className={styles.menuItemOption} icon={<BulletPoint />} component={<Link to="/suppliers" />} active={isActivePath('/suppliers')} title="Gestionar proveedores registrados"> Gestionar </MenuItem>
                    </SubMenu>
                </Menu>

                <div className={styles.helpContainer}>
                    <Menu menuItemStyles={helpMenuItemStyles}>
                        <MenuItem className={styles.menuItemOption} icon={<FaQuestionCircle size={18} />} component={<Link to="/help" />} active={isActivePath('/help')} title="Ir al centro de ayuda"> Ayuda </MenuItem>
                        {isHomePath ? (
                            <MenuItem className={styles.menuItemOption} icon={<FaXmark className={styles.iconBack} size={18} />} onClick={handleExitApp} title="Cerrar la aplicacion"> Salir </MenuItem>
                        ) : (
                            <MenuItem className={styles.menuItemOption} icon={<FaXmark className={styles.iconBack} size={18} />} onClick={handleGoBack} title="Volver a la pantalla anterior"> Volver Atras </MenuItem>
                        )}
                    </Menu>
                </div>
            </div>
        </Sidebar>
    );
}

export default SidebarOptions;