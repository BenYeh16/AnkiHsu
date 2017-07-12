import React from 'react';
import { debounce } from 'lodash';
import menu from '../configs/menu.js';


class Menu extends React.Component {
    constructor() {
        super();

        this.handleScroll = debounce(this.handleScroll.bind(this), 70);
    }

    handleScroll() {
        const sections = document.querySelectorAll('.section');
        console.log('======== sections', sections);
    }

    render() {
        return (
            <div>
                <ul className="D(f) List(n) Jc(sb) P(0) My(0) Mx(20%) C(#4a4a4a) Fz(18px)">
                {
                    menu.map((item, index) => 
                        <li key={`${item.id}-${index}`}>
                            <a href={item.url} className="Td(n)">
                                {item.name}
                            </a>
                        </li>
                    )
                }
                </ul>
            </div>
        );
    }
};

export default Menu;