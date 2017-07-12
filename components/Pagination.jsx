import React from 'react';

export default function Pagination() {
    const pages=[ '1', '2', '3', '4', '5','6', '7', '8', '9', '10']

    return (
        <div className="W(100%) H(150px) D(ib) M(a) Ta(c)">
            {
                pages.map((item) =>
                    <a href="#" className="D(ib) P(16px) D(ib) Bdw(1px) Bdc(#b3b3b3) Bds(s) Mx(4px) My(0)">{item}</a>
                )
            }
            <a href="#" className="D(ib) P(16px) D(ib) Bdw(1px) Bdc(#b3b3b3) Bds(s) Mx(4px) My(0)">&raquo;</a>
        </div>
    )
}