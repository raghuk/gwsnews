import * as types from './actionTypes';


export function loadPosts() {
    return {
        type: [types.POSTS_LOAD, types.POSTS_LOAD_SUCCESS, types.POSTS_LOAD_FAILURE],
        promise: (sdk) => sdk.getPosts(),
        loader: true
    };
}
