export default class AppSdk {

    constructor(client) {
        this._client = client;
    }

    getMethods() {
        let result = {};
        result.version = 1;

        ['get', 'post', 'put', 'patch', 'del'].forEach((method) => {
            result[method] = (path, options = {}) => {
                console.warn("deprecated api call: ", method, path, options);
                return this._client[method](path, options);
            }
        });

        result.getCategories = () => this._client.get('/categories');
        result.getPosts = () => this._client.get('/posts');
        result.getEvents = (id) => this._client.get('/posts?categories='+ id);

        return result;
    }
}
