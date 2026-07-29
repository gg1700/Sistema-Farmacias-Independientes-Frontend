import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SidebarOptions from './Sidebar';

const styles = {
    pageContainer: "flex flex-col min-h-screen",
    bodyContainer: "flex flex-1",
    mainContent: "flex-1 flex flex-col",
    pageContent: "flex-1 p-6 bg-background",
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
        </div>
    );
}

export default Layout;