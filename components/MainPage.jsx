import React from 'react';
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Home from './Home.js'
import SectionDivider from './SectionDivider.jsx';

export default function MainPage() {
    return (
        <div className="Bgi(headerbackground) Bgpx(50%) Bgpy(0) Bgz(54%) Bgr(nr) Maw(1440px) Miw(1024px) Mx(a)">
            <Header />
            <Menu />
            <Home />
            <SectionDivider imgUrl="https://ankihsu.com/wp-content/uploads/2017/07/AboutAnki.png" id="About"/>
            <SectionDivider imgUrl="https://ankihsu.com/wp-content/uploads/2017/07/Service.png" id="Service"/>
            <SectionDivider imgUrl="https://ankihsu.com/wp-content/uploads/2017/07/Reservation.png" id="Reservation"/>
            
        </div>
    );
};
