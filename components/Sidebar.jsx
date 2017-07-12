import React from 'react';
import sidebar from '../configs/sidebar.js';

export default function Sidebar() {
    return (
        <div className="W(23%) Fl(start) H(280px) Ta(c) Lh(280px) Fz(15px) Bgc(#cecece)) Pos(r)">
            <div className="W(100%)">
                <ul className="List(n) Jc(sb) P(0) My(0) Mx(20%) C(#4a4a4a) Fz(18px) Lh(44px)" >
                {
                    sidebar.map((item, index) =>
                        <li key={`${item.id}-${index}`} className="Mb(5px)">{item.name}</li>
                    )
                }
                </ul>
            </div>
        </div>
    )
}
