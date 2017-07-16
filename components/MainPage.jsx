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
            <div className="W(100%) H(700px) Bgc(#f7ded1) Mt(70px)">
                <SectionDivider imgUrl="https://ankihsu.com/wp-content/uploads/2017/07/Reservation.png" id="reservation"/>
                <img
                    src='https://ankihsu.com/wp-content/uploads/2017/07/reservationPlan.png'
                    className="Pos(a)"
                />
                <img 
                    src='https://ankihsu.com/wp-content/uploads/2017/07/formNormal.png'
                    className="Mt(494px) Mstart(470px) Pos(a)"
                />
            </div>
            <div 
                className="W(100%) H(350px)"
            >
                <div
                    className="Mx(a) Mt(25px) Ta(c) Ff(MicrosoftJhengHei) Fz(20px) C(#895d41)"
                >
                    聯絡方式
                </div>
                <div className="Pos(r) D(ib)">
                    <img 
                        src='https://ankihsu.com/wp-content/uploads/2017/07/line.png'
                        className="Mt(126px) Mstart(267px)"
                    />
                    <div className="W(192px) H(36px) Mstart(203px) Fz(24px) C(#895d41)">
                        Line ID: ankihsu
                    </div>
                </div>
                <div className="Pos(r) D(ib)">
                    <img
                        src='https://ankihsu.com/wp-content/uploads/2017/07/mail.png'
                        className="Mstart(260px)"
                    />
                    <div className="Mstart(149px) Fz(24px) C(#895d41)"> 
                        ankisophie520@gmail.com
                    </div>
                </div>
                <div className="Pos(r) D(ib)">
                    <img
                        src='https://ankihsu.com/wp-content/uploads/2017/07/FB-1.png'
                        className="Mstart(310px)"
                    />
                    <div className="Mstart(149px) Fz(24px) C(#895d41)">
                        Anki Hsu Makeup & Hair \n
                        新娘秘書 整體造型
                    </div> 
                </div>
            </div>
            <Footer />
        </div>
    );
};
