import React from 'react';
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import SectionDivider from './SectionDivider.jsx';

export default function MainPage() {
    return (
        <div className="Bgi(headerbackground) Bgpx(50%) Bgpy(0) Bgz(54%) Bgr(nr)">
            <Header />
            <Menu />
            <SectionDivider />
        </div>
    );
};
