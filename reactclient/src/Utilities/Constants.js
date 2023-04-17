const API_BASE_URL_DEVELOPMENT = 'https://localhost:7107';

const ENDPOINTS = {
    GET_ALL_POSTS: 'get-all-posts',
    GET_POST_BY_ID: 'get-post-by-id',
    CREATE_POST: 'create-post',
    UPDATE_POST: 'update-post',
    DELETE_POST_BY_ID: 'delete-post-by-id',

    CREATE_BRUKER: 'create-bruker',
    LOGG_INN: 'logg-inn'
};

const development = {
    API_URL_GET_ALL_POSTS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_POSTS}`,
    API_URL_GET_POST_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_POST_BY_ID}`,
    API_URL_CREATE_POST: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_POST}`,
    API_URL_UPDATE_POST: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.UPDATE_POST}`,
    API_URL_DELETE_POST_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_POST_BY_ID}`,

    API_URL_CREATE_BRUKER: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_BRUKER}`,
    API_URL_LOGG_INN: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.LOGG_INN}`
};

const production = {};

const Constants = process.env.NODE_ENV === 'development' ? development : production

export default Constants;