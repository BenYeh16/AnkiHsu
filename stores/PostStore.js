import BaseStore from 'fluxible/addons/BaseStore';

class PostStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.category = {};
        this.post = [];
    }
    
    _handlePost(payload) {
        this.post['list'] = payload;

        this.emitChange({
            name: 'handlePostSuccess',
            payload: this.post
        });
    }

    getPost(key) {
        return this.post[key];
    }

    dehydrate() {
        return {
            pageTitle: this.pageTitle
        };
    }
    rehydrate(state) {
        this.pageTitle = state.pageTitle;
    }
}

PostStore.storeName = 'PostStore';
PostStore.handlers = {
    'FETCH_POST_SUCCESS': '_handlePost'
};

export default PostStore;
