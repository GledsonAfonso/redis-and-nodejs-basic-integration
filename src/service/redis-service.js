const redis = require('redis');
const { promisify } = require('util');

const environment = require('../configuration/environment');

let client;

const connect = () => {
  const { redisPort, redisHost, redisPassword } = environment;

  let config_options = {};
  
  if (redisPort) {
    config_options.port = redis_port;
  }

  if (redisHost) {
    config_options.host = redis_host;
  }

  if (redisPassword) {
    config_options.password = redis_password;
  }

  client = redis.createClient();

  client.on('error', (error) => {
    console.log(error);
    throw error;
  });
};

const _getClient = () => {
  if (!client) {
    connect();
  }

  return client;
};

const set = promisify(_getClient().set).bind(_getClient());
const get = promisify(_getClient().get).bind(_getClient());

const setKeyValue = async (key, original_value) => {
  try {
    let value;
    if (typeof original_value === 'object') {
      value = JSON.stringify(original_value);
    } else {
      value = original_value;
    }

    await set(key, value);
  } catch (error) {
    console.log(error);
  }
};

const getValue = async (key, isCastNeeded = false) => {
  let result;

  try {
    result = await get(key);

    if (isCastNeeded) {
      result = JSON.parse(result);
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const getValueAsObject = async (key) => {
  const result = await getValue(key, true);  
  return result;
};

module.exports = { connect, setKeyValue, getValue, getValueAsObject };