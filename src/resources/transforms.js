import {isEmpty, isString, replace, trim, unescape} from 'lodash';

import getAge from '../utils/getAge';


export function transformPost(post) {
    let result = {};

    if (!isEmpty(post)) {
        return {
            id: post.id,
            title: trim(post.title.rendered),
            description: trim(unescape(replace(post.content.plaintext, /(?:\\[rn])+/g, ''))),
            excerpt: trim(replace(post.excerpt.rendered, /(<([^>]+)>)/ig, '')),
            author: 'Peace News',
            image: isString(post.image) ? post.image : null,
            slug: post.slug,
            categories: post.categories,
            age: getAge.local(post.date),
            created: post.date
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
            age: getAge.local(post.date),
            created: post.date
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
