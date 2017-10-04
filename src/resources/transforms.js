import {isEmpty, join, replace, trim, truncate, unescape} from 'lodash';

import getAge from '../utils/getAge';


export function transformPost(post) {
    let result = {};

    if (!isEmpty(post)) {
        let description = trim(unescape(replace(post.details, /(?:\\[rn])+/g, '')));
        let excerpt = replace(description, /(<([^>]+)>)/ig, '');

        return {
            id: post.id,
            title: trim(post.title),
            description: description,
            excerpt: truncate(excerpt, {'length': 120, 'separator': ' ', 'omission': '...'}),
            creator: {
                id: post.user_id,
                name: join([trim(post.first_name), trim(post.last_name)], ' ')
            },
            views: post.views,
            age: getAge.local(parseInt(post.created)*1000),
            created: post.created
        }
    }

    return result;
}
