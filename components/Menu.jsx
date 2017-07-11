import React from 'react';
import menu from '../configs/menu.js';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <ul className="D(f) List(n) Jc(sb) P(0) My(0) Mx(20%) C(#4a4a4a) Fz(18px)">
                {
                    menu.map((item, index) => 
                        <li key={`${item.id}-${index}`}>{item.name}</li>
                    )
                }
                </ul>
            </div>
        );
    }
};

export default Menu;