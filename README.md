fray.model
==========

Persistent data structures

Usage
-----

```js
var model = require('fray,.model');

var user = model({
  name: 'John',
  age: 30
});

// read
user(['name']); // 'John'

// update
user(['age'], 40);
user(['age']); // 40
```

### Root node

```js
// root
user([]); // { name: 'John', age: 40 }

// replace
user([], { name: 'James' });
user([]); // { name: 'James' }
```

### Persistent data structures

```js
var snapshot = user([]);
user([]) === snapshot // true

user(['age'], 30);
user([]) === snapshot // false
```

### Nested trees

```js
var data = model({
  foo: {
    bar: 123
  }
});

// read
data(['foo', 'bar']); // 123

// update
data(['foo', 'bar'], 'abc');
data(['foo', 'bar']); // 'abc'
```

### Create nodes

```js
data(['foz']); // undefined
data(['foz'], 123);
data([]); // { foo: { bar: 'abc' }, foz: 123 }
```

Install
-------

    npm install fray.model

Contributing
------------

PRs are welcome!

### Unit tests

    git clone https://github.com/frayjs/model
    cd model
    npm install
    npm test

References
----------

  * <https://facebook.github.io/immutable-js/>
  * <https://en.wikipedia.org/wiki/Persistent_data_structure>

License
-------

MIT
