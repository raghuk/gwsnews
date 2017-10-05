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
            slug: post.slug,
            age: getAge.local(post.modified),
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
            title: trim(post.title.rendered),
            author: 'Peace News',
            slug: post.slug,
            age: getAge.local(post.modified),
            created: post.modified
        }
    }

    return result;
}

export function transformCategory(category) {
    let result = {};

    if (!isEmpty(category)) {
        return {
            id: category.id,
            name: trim(category.name),
            slug: category.slug,
            count: category.count
        }
    }

    return result;
}
