# CSV Backend for es6
Fetch and query cartodb data from using elastic-search-like syntax.

# Quickstart
``npm install cartodb-es6-data-backend``
```javascript
  import Cartodb from 'cartodb-es6-data-backend';

  const config = {
    user: 'username',
    table: 'table.name'
  }

  Cartodb.fetch(config)
    .then(data => {
      // use your data wisely
    })
    .catch(e => {
      // handle exception
    });
```

