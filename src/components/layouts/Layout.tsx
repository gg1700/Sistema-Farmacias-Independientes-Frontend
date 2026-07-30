import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SidebarOptions from './Sidebar';
import { ModalRoot } from '../modals/ModalRoot';

const styles = {
    pageContainer: "flex flex-col h-screen overflow-hidden",
    bodyContainer: "flex flex-1 min-h-0 min-w-0",
    mainContent: "flex-1 flex flex-col min-h-0 min-w-0",
    pageContent: "flex-1 p-6 bg-background overflow-x-auto overflow-y-auto min-w-0",
}

function Layout() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.bodyContainer}>
                <SidebarOptions />
                <div className={styles.mainContent}>
                    <Header />
                    <div className={styles.pageContent}>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
            <ModalRoot />
        </div>
    );
}

export default Layout;