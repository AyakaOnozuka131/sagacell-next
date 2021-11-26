import Header from './Header';
import Footer from './Footer';
import LayoutClassName from '../../styles/layout/layout.module.scss';

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main className={LayoutClassName['l-main']}>{children}</main>
            <Footer />
        </>
    );
};