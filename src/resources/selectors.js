
// App
export function getIsFetching(state) {
    return Boolean(state.app.isFetching);
}

// Posts
export function getPosts(state) {
    return state.posts.allIds.map(id => getPost(state, id));
}

export function getPost(state, id) {
    return state.posts.byId[id] || {};
}

export function getSelectedPost(state) {
    return getPost(state, state.posts.selectedId);
}
