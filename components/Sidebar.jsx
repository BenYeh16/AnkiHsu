import React from 'react';
import sidebar from '../configs/sidebar.js';
import connectToStores from 'fluxible-addons-react/connectToStores';
import PostStore from '../stores/PostStore.js';

class Sidebar extends React.Component {

    render(){
        const {
            data
        } = this.props;

        return (
            <div className="W(23%) Fl(start) H(280px) Ta(c) Lh(280px) Fz(15px) Bgc(#cecece)) Pos(r)">
                <div className="W(100%)">
                    <ul className="List(n) P(0) My(0) Mx(20%) C(#4a4a4a) Fz(18px) Lh(44px)" >
                    {
                        Object.keys(data).map((key, index) => {
                            const item = data[key];
                            return (<li key={`${item.name}-${index}`} className="Mb(5px)">{`${item.name} (${item.count})`}</li> );
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

Sidebar = connectToStores(Sidebar, [PostStore], (context, props) => ({
    data: context.getStore(PostStore).getCategories()
}));

export default Sidebar;


