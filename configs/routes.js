import Home from '../components/Home';
import MainPage from '../components/MainPage.jsx';
import About from '../components/About';
import Collection from '../components/Collection.jsx';
import Blog from '../components/Blog.jsx';

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: MainPage
    },
    collection: {
        path: '/collection',
        method: 'get',
        page: 'collection',
        title: 'Collection',
        handler: Collection
    },
    blog: {
        path: '/blog',
        method: 'get',
        page: 'blog',
        title: 'Blog',
        handler: Blog
    }
};
