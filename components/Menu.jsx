import React from 'react';

class Menu extends React.Component {
    render() {
        const menuTitle = ['HOME', '關於Anki', '服務提供', '預約方式', '精選作品+', 'Blog+'];

        return (
            <div>
                <ul style={{
                    listStyleType: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0',
                    margin: '0 292px 0 292px',
                    fontFamily: 'PingFangTC',
                    color: '#4a4a4a',
                    fontSize: '18px'
                }}>
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