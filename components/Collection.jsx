import React from 'react';
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import Sidebar from './Sidebar.jsx';
import CollectionBody from './CollectionBody.jsx';

export default function Collection() {
    return (
        <div className="Bgi(headerbackground) Bgpx(50%) Bgpy(0) Bgz(54%) Bgr(nr) Maw(1440px) Miw(1024px) Mx(a)">
            <Header />
            <Menu />
            <div className="W(100%) T(21.5px)">
                <Sidebar />
                <CollectionBody />
            </div>
            <Footer />
        </div>
    )
}