import React from 'react';
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Home from './Home.js';
import Footer from './Footer.jsx';
import SectionDivider from './SectionDivider.jsx';

export default function MainPage() {
    return (
        <div className="Bgi(headerbackground) Bgpx(50%) Bgpy(0) Bgz(54%) Bgr(nr) Maw(1440px) Miw(1024px) Mx(a)">
            <Header />
            <Menu />
            <Home />
            <div className="W(100%) H(674px) Bgi(aboutankibackground)">
                <SectionDivider imgUrl="https://ankihsu.com/wp-content/uploads/2017/07/AboutAnki.png" id="about"/>
                <img 
                    src='https://ankihsu.com/wp-content/uploads/2017/07/idealback.png'
                    className="Mstart(200px) Mt(143px) Pos(a)"
                />
                <img 
                    src='https://ankihsu.com/wp-content/uploads/2017/07/ideal.png'
                    className="Mstart(207px) Mt(150px) Pos(a)"
                />
            </div>
            <div>
                <img 
                    src='https://ankihsu.com/wp-content/uploads/2017/07/serviceFeature.png'
                />
            </div>
            <div className="W(100%) H(1024px) Bgc(white)">
                <SectionDivider imgUrl="https://ankihsu.com/wp-content/uploads/2017/07/Service.png" id="service"/>
                <img
                    src='https://ankihsu.com/wp-content/uploads/2017/07/options.png'
                    className="Mstart(95px) Mt(208px)"
                />
            </div>
            <div className="W(100%) H(944px) Bgc(#f7ded1) Mt(70px)">
                <SectionDivider imgUrl="https://ankihsu.com/wp-content/uploads/2017/07/Reservation.png" id="reservation"/>
            </div>
            <Footer />
        </div>
    );
};
