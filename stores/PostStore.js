import BaseStore from 'fluxible/addons/BaseStore';

class PostStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.categoryMap = {};
        this.post = [];
    }
    
    _handlePost(payload) {
        this.post['list'] = payload;

        this.emitChange({
            name: 'handlePostSuccess',
            payload: this.post
        });
    }

    _handleCategories(payload) {
        [].concat(payload).forEach((category) => {
            this.categoryMap[category.id] = {
                name: category.name,
                count: category.count,
                parent: category.parent
            }
        });

        this.emitChange({
            name: 'handleCategoriesSuccess',
            payload: this.categoryMap
        });
    }

    getCategories() {
        return this.categoryMap;
    }

    getPost(key) {
        return this.post[key];
    }

    dehydrate() {
        return {
            pageTitle: this.pageTitle,
            categoryMap: this.categoryMap
        };
    }
    rehydrate(state) {
        this.pageTitle = state.pageTitle;
        this.categoryMap = state.categoryMap;
    }
}

PostStore.storeName = 'PostStore';
PostStore.handlers = {
    'FETCH_POST_SUCCESS': '_handlePost',
    'FETCH_CATEGORY_SUCCESS': '_handleCategories'
};

export default PostStore;
