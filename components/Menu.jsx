import React, { PropTypes } from 'react';
import { debounce } from 'lodash';
import menu from '../configs/menu.js';
import { getPosts } from '../actions/fetchPosts.js';


class Menu extends React.Component {
    constructor(props, context) {
        super();
        //console.log('======== context', context);
        this.handleScroll = debounce(this.handleScroll.bind(this), 70);
        // context.executeAction(getPosts, {});
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

Menu.contextTypes = {
    getStore: PropTypes.func,
    executeAction: PropTypes.func
};

export default Menu;