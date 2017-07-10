import React from 'react';

class Menu extends React.Component {
    render() {
        const menuTitle = ['HOME', '關於Anki', '服務提供', '預約方式', '精選作品+', 'Blog+'];

        return (
            <div>
                <ul className="D(f) List(n) Jc(sb) P(0) My(0) Mx(292px) C(#4a4a4a) Fz(18px)">
                {
                    menuTitle.map((item) => 
                        <li>{item}</li>
                    )
                }
                </ul>
            </div>
        );
    }
};

export default Menu;