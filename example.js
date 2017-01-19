import Cartodb from './src/index.js';

// Wildcard
// SELECT * FROM climate_indices LIMIT 100
let config = {
  user: 'dkan-admin',
  table: 'climate_indices',
}
Cartodb.fetch(config)
  .then(data => {
    console.log(data);
  });

// Fields
// SELECT yearmonth, statecode FROM climate_indices LIMIT 10 
config = {
  user: 'dkan-admin',
  table: 'climate_indices',
  query: {
    size: 10,
    fields: ["yearmonth", "statecode"]
  }
}
Cartodb.fetch(config)
  .then(data => {
    console.log(data);
  });

// WHERE clause using "AND"
// SELECT statecode FROM climate_indices WHERE yearmonth = '201001' AND yearmonth = '201002'
config = {
  user: 'dkan-admin',
  table: 'climate_indices',
  query: {
    fields: ["statecode"],
    filters:[
      {
        'term': {"statecode": "1"}
      },
      {
        'term': {"statecode" : "2"}
      }
    ]
  }
}
Cartodb.fetch(config)
  .then(data => {
    console.log(data);
  });

// WHERE clause using range 
// SELECT statecode FROM climate_indices WHERE yearmonth >= 201001 AND yearmonth < 201101
config = {
  user: 'dkan-admin',
  table: 'climate_indices',
  query: {
    fields: ["statecode"],
    filters:[
      {
        'range': {"yearmonth": {"gte": "201001"}}
      },
      {
        'range': {"yearmonth": {"lt": "201101"}}
      }
    ]
  }
}
Cartodb.fetch(config)
  .then(data => {
    console.log(data);
  });

// WHERE clause using "OR"
// SELECT statecode FROM climate_indices WHERE yearmonth = '201001' AND yearmonth = '201002' LIMIT 10 
config = {
  user: 'dkan-admin',
  table: 'climate_indices',
  query: {
    fields: ["statecode"],
    operator: 'OR',
    filters:[
      {
        'term': {"yearmonth": "201001"}
      },
      {
        'term': {"yearmonth": "201002"}
      }
    ]
  }
}
Cartodb.fetch(config)
  .then(data => {
    console.log(data);
  });
