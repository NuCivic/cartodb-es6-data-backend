const Cartodb = {};

Cartodb.__type__ = "cartodb";

Cartodb.fetch = function (config) {
  let url, query, sql;
  return new Promise((resolve, reject) => {
		// parse user and query from url
		if (config.url) {
			config.user = privates._parseDatasetUrl(config.url);
			query = config.url.match(/q=(.*)/g);
			query = decodeURIComponent(query[0].replace('q=',''));
		// otherwise create a default query
		} else {
			query = config.query || privates._defaultQuery(config);
			query.table = config.table;
			query = Es2sql.translate(query);
		}
	  url = Cartodb.makeUrl(config, query);
    fetch(url)
      .then(res => {
        console.log('r', res);
        return res.json();
      })
      .then(data => {
        let output = {};
        console.log('rr', data);
        let fields = Object.keys(data.fields).map((val, i) => {
          return {id: val};
        });
        console.log('rrr', fields);
        output.fields = fields;
        output.rows = data.rows;
        output.useMemoryStore = false;
        console.log('rrrr', output)
        resolve(output);
      })
      .catch(e => {
        console.log('Error fetching from cartodb', e);
        reject(e);
      });
	});
};

Cartodb.makeUrl = function (config, q) {
  const query = encodeURIComponent(q);
	return `${config.user}.cartodb.com/api/v2/sql?=${query}`;
};

export default Cartodb;
