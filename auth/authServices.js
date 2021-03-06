const axios = require('axios');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

let env = {
    url: 'https://auth.emergencyreporting.com'
};

const setAuthEnv = (opts) => {
    env = Object.assign({}, env, opts);
};

const refreshAuthorization = (refresh_token, client_id, client_secret) => axios({
    url: `${env.url}/Token.php`,
    method: 'post',
    data: {
        grant_type: 'refresh_token',
        client_id,
        client_secret,
        refresh_token
    }
}).then(response => response.data);

const authorizePassword = (username, password, client_id, client_secret) => axios({
    url: `${env.url}/Token.php`,
    method: 'post',
    data: {
        grant_type: 'password',
        client_id,
        client_secret,
        username,
        password
    }
}).then(response => response.data);

module.exports = {
    refreshAuthorization,
    authorizePassword,
    setAuthEnv
}