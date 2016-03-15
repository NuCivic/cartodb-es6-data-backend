import * as Es2sql from 'es2sql';

const API_V = 'v2';
let Cartodb = {};

Cartodb.__type__ = "cartodb";

Cartodb.fetch = function (config) {
  let query, url, urlWithQuery, sql;
  return new Promise((resolve, reject) => {
		// parse user and query from url
		if (config.url) {
      url = config.url;
			config.user = Cartodb._parseDatasetUrl(config.url);
			query = config.url.match(/q=(.*)/g);
		// otherwise create a default query
		} else {
      url = Cartodb._getUrl(config);
			query = config.query || Cartodb._defaultQuery(config);
			query.table = config.table;
			query = encodeURIComponent(Cartodb._getQueryString(query));
		}
    urlWithQuery = url+query;
		// Do fetch
    fetch(urlWithQuery)
      .then(res => {
        return res.json();
      })
      .then(data => {
        let output;
        let fields = Object.keys(data.fields).map(function(val, i) {
          return {id: val};
        });
        output = {
          fields: fields,
          rows:  data.rows,
          useMemoryStore: false
        };
        resolve(output);
      })
      .catch(e => {
        reject(e);
      });
		});
};


Cartodb._getUrl = function (config) {
  return `https://${config.user}.cartodb.com/api/${API_V}/sql?q=`
};

// return the non urlencoded query
Cartodb._getQueryString = function (query) {
  return Es2sql.translate(query);
};

Cartodb._defaultQuery = function (config) {
  return {
    table: config.table,
    user: config.user,
    from: 0,
    size: 100
  }
}

// exports for testing
Cartodb.Es2sql = Es2sql;

// Get usermame fron url
Cartodb._parseDatasetUrl = function (url) {
  let s = url.replace(/http(s*):\/\//g, '');
  s = s.split('.')[0];
  return s;
};

export default Cartodb;
