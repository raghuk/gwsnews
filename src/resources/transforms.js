import {isEmpty, replace, trim, unescape} from 'lodash';

import getAge from '../utils/getAge';


export function transformPost(post) {
    let result = {};

    if (!isEmpty(post)) {
        return {
            id: post.id,
            title: trim(post.title.rendered),
            description: trim(unescape(replace(post.content.plaintext, /(?:\\[rn])+/g, ''))),
            excerpt: trim(post.excerpt.rendered),
            author: 'Peace News',
            age: getAge.local(parseInt(post.modified)*1000),
            created: post.modified
        }
    }

    return result;
}

export function transformEvent(post) {
    let result = {};

    if (!isEmpty(post)) {
        return {
            id: post.id,
            title: trim(post.title.rendered)
        }
    }

    return result;
}
