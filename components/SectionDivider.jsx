import React from 'react';

export default function SectionDivider(props) {
    const {
        imgUrl = '',
        id = '',
    } = props;

    return (
        <div id={id} className="section Mt(70px) W(100%) H(30px) Pos(r)">
            <div className="W(100%) H(2px) My(14px) Bgc(#895d41) Pos(a)" />
            <img 
                src={imgUrl}
                className="Pos(a) W(145px) M(a) T(0) B(0) Start(0) End(0)"
            />
        </div>
    );
};
