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
            <div className="Pos(r) W(100%) H(218px)">
                <img
                    src="https://ankihsu.com/wp-content/uploads/2017/07/LOGO.png"
                    className="W(69px) H(69px) Pos(a) TranslateX(-50%) Start(50%) T(45px)"
                />
                <img
                    src="https://ankihsu.com/wp-content/uploads/2017/07/Anki-Hsu-Makeup-Ha.png"
                    className="Pos(a) TranslateX(-50%) Start(50%) T(134px)"
                />
                <img 
                    src={ facebookOnHover ? 'https://ankihsu.com/wp-content/uploads/2017/07/FBhovered.png' : 'https://ankihsu.com/wp-content/uploads/2017/07/FB.png'  }
                    className="W(35px) H(35px) Pos(a) End(135px) T(134px)"
                    onMouseEnter={() => {this.setState({ facebookOnHover: true })}}
                    onMouseLeave={() => {this.setState({ facebookOnHover: false })}}
                />
                <img 
                    src={ instagramOnHover ? 'https://ankihsu.com/wp-content/uploads/2017/07/instagramhovered.png' : 'https://ankihsu.com/wp-content/uploads/2017/07/instagram.png' }
                    className="W(35px) H(35px) Pos(a) End(86.8px) T(134px)"
                    onMouseEnter={() => {this.setState({ instagramOnHover: true })}}
                    onMouseLeave={() => {this.setState({ instagramOnHover: false })}}
                />
            </div>
        );
    }
};

export default Header;
