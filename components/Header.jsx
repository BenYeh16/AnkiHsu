import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            facebookOnHover: false,
            instagramOnHover: false
        };
    }

    render() {
        const {
            facebookOnHover,
            instagramOnHover
        } = this.state;

        return (
            <div style={{
                position: 'relative',
                width: '100%',
                height: '293.5px'
            }}>
                <img
                    src="https://ankihsu.com/wp-content/uploads/2017/07/LOGO.png"
                    style={{
                        width: '69px',
                        height: '69px',
                        position: 'absolute',
                        transform: 'translateX(-50%)',
                        left: '50%',
                        top: '45px'
                    }}
                />
                <img
                    src="https://ankihsu.com/wp-content/uploads/2017/07/Anki-Hsu-Makeup-Ha.png"
                    style={{
                        position: 'absolute',
                        transform: 'translateX(-50%)',
                        left: '50%',
                        top: '134px'                
                    }}
                />
                <img 
                    src={ facebookOnHover ? 'https://ankihsu.com/wp-content/uploads/2017/07/FBhovered.png' : 'https://ankihsu.com/wp-content/uploads/2017/07/FB.png'  }
                    style={{
                        width: '35px',
                        height: '35px',
                        position: 'absolute',
                        right: '135px',
                        top: '134px'
                    }}
                    onMouseEnter={() => {this.setState({ facebookOnHover: true })}}
                    onMouseLeave={() => {this.setState({ facebookOnHover: false })}}
                />
                <img 
                    src={ instagramOnHover ? 'https://ankihsu.com/wp-content/uploads/2017/07/instagramhovered.png' : 'https://ankihsu.com/wp-content/uploads/2017/07/instagram.png' }
                    style={{
                        width: '35px',
                        height: '35px',
                        position: 'absolute',
                        right: '86.8px',
                        top: '134px'
                    }}
                    onMouseEnter={() => {this.setState({ instagramOnHover: true })}}
                    onMouseLeave={() => {this.setState({ instagramOnHover: false })}}
                />
            </div>
        );
    }
};

export default Header;
