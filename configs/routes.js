import Home from '../components/Home';
import MainPage from '../components/MainPage.jsx';
import About from '../components/About';
import Collection from '../components/Collection.jsx';
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
        handler: Collection
    }
};
