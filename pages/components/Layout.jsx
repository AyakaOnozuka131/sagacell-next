import Header from './components/Header';
import Footer from './components/Footer';
import LayoutClassName from '../../styles/layout/layout.module.scss';

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main className={LayoutClassName['l-header']}>{children}</main>
            <Footer />
        </>
    );
};