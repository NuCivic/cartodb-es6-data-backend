import * as Es2sql from 'es2sql';

const API_V = 'v2';
let Cartodb = {};
let Privates = {};

Cartodb.__type__ = "cartodb";

Cartodb.fetch = function (config) {
  let query, url, sql;
  return new Promise((resolve, reject) => {
		// parse user and query from url
		if (config.url) {
      url = config.url;
			config.user = privates._parseDatasetUrl(config.url);
			query = config.url.match(/q=(.*)/g);
			query = decodeURIComponent(query[0].replace('q=',''));
			console.log('cdbF0', query);
		// otherwise create a default query
		} else {
      url = Cartodb._getUrl(config);
			query = config.query || privates._defaultQuery(config);
			query.table = config.table;
			query = Es2sql.translate(query);
		}
		//
    sql.execute(query).done(function (data) {
			console.log('cdf0.6', data);
      let output;
			let fields = _.keys(data.fields).map(function(val, i) {
				return {id: val};
			});
			console.log('cdbf1', fields, config);
			output = {
				fields: fields,
				rows:  data.rows,
				useMemoryStore: false
			};
      resolve(output);
		});
	});
};

Cartodb._getUrl = function (config) {
  return `https://${config.user}.cartodb.com/api/${API_V}/sql?`
};


// exports for testing
Cartodb.Es2sql = Es2sql;
Cartodb.Privates = Privates;

// Get usermame fron url
Privates._parseDatasetUrl = function (url) {
  let s = url.replace(/http(s*):\/\//g, '');
  s = s.split('.')[0];
  return s;
};

export default Cartodb;
