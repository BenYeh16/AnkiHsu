import Home from '../components/Home';
import MainPage from '../components/MainPage.jsx';
import About from '../components/About';

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: MainPage
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: About
    }
};
