# README #

FuncKit is a granular ES6 library for individual functional methods. This allows you to include the methods nessesary for your project with out including a wide unnecessary rage of library attachments.

### NPM Installation ###

```js
$ npm install funckit -save
```

### Method Importing ###

```js
import assignDeep from 'funckit\object\assignDeep';
import chunk from 'funckit\array\chunk';

```

### Array:Chunk ###

Splits array into chunks using the specified size.

Usage:
```js
chunk([1,2,3,4,5,6,7,8,9, 10], 3)
```
Output:
```js
=> [[1,2,3],[4,5,6],[7,8,9],[10]]
```

### Array:Compact ###

Removes and null, false and undefined values from the passed array

Usage:
```js
compact(1,false, undefined,null,2)
```
Output:
```js
=> [1,2]
```

### Array:Compress ###

Takes in multiple array types and merges into a new array accordingly

Usage:
```js
compress([1,2,3,4],[5,6,7],[8,9,10])
```
Output:
```js
=> [[1,2,3,4],[5,6,7],[8,9,10]]
```

### Array:Diff ###

Retuns the difference between two arrays

Usage:
```js
diff([1,2,3,4],[1,2,3,4,5,6,7])
```
Output:
```js
=> [5,6,7]
```
### Array:First ###

Returns the first value of passed array

Usage:
```js
first([1,2,3,4])
```
Output:
```js
=> 1
```

### Array:Flatten ###

Flattens nested arrays

Usage:
```js
flatten([1,[2],[[3]]])
```
Output:
```js
=> [1,2,3]
```

### Array:Intersection ###

Takes in multiple array types and returns all values contained in every array

Usage:
```js
intersection([1,2,3,4],[2,3,4],[1,2,2,3,3])
```
Output:
```js
=> [2,3]
```

### Array:Last ###

Retuns the last value of the passed in array

Usage:
```js
last([1,2,3,4,5])
```
Output"
```js
=> 5
```

### Array:Merge ###

Merges all values from all passed in array arugments in to the onw array

Usage:
```js
merge([1,2,3,4],[5,6,7,8],[9,10])
```
Output:
```js
=> [1,2,3,4,5,6,7,8,9,10]
```

### Array:Occurrences ###

Returns the amount of occurrences of a value in the passed array

Usage"
```js
occurrences([1,2,1,2,1,2,1],2)
```
Output:
```js
=> 3
```

### Array:Pick ###

Returns the array value by index if it exists in the given array

Usage"
```js
pick(['John', 'Is', 'King'], 2)
```
Output:
```js
=> 'King'
```

### Array:Range ###

Returns the values of an array  between the start and end arguments

Usage:
```js
range([1,2,3,4,5,6,7,8,9], 4, 9)
```
Output:
```js
=> [5,6,7,8,9]
```

### Array:Shuffle ###

Returns all the values from the passed array in a randomised order

Usage:
```js
shuffle([1,2,3,4,5,6])
```
Output:
```js
=> [2,5,4,1,3,6]
```

### Array:Unique ###

Removes all dublicate entries from the passed array

Usage:
```js
unique([1,1,1,2,2,3])
```
Output:
```js
=> [1,2,3]
```

### Array:Without ###

Removes all specified values from the passed array

Usage:
```js
without(['John', 'Cambo', 'Dan', 'Tom']], 'Tom', 'Dan');
```
Output:
```js
=> ['John', 'Cambo']
```


### Collection:HasMany ###

Joins entries from one collection to multiple others using a primary and foreign key to identify the relationship

Usage:
```js
const people = [
  {
    id: 2,
    name: 'steff',
    age: 27,
  }
]

const addresses = [
  {
    id: 1,
    person_id: 2,
    postcode: 'l12pa'
  }
];

const info = [
  {
    id: 1,
    person_id: 2,
    bio: 'Steff loves his ginger locks.'
  }
];

hasMany(people, 'id', 'person_id', addresses, info)
```
Output:
```js
=> [{
 id: 2,
 name: 'steff',
 age: 27,
 address: {
   id: 1,
   person_id: 2,
   postcode: 'l12pa'
 },
 info: {
   id: 1,
   person_id: 2,
   bio: 'Steff loves his ginger locks.'
 }
}]
```

### Collection:HasOne ###

Joins entries from one collection to another using a primary and foreign key to identify the relationship

Usage:
```js
const people = [
  {
    id: 2,
    name: 'steff',
    age: 27,
  }
 ]

const addresses = [
  {
    id: 1,
    person_id: 2,
    postcode: 'l12pa'
  }
];

hasOne(people, addresses, 'id', 'person_id', 'address')
```
Output:
```js
=> [{
  id: 2,
  name: 'steff',
  age: 27,
  address: {
    id: 1,
    person_id: 2,
    postcode: 'l12pa'
  }
}]
```

### Collection:Pluck ###

Plucks and returns all instances of the specified property in a collection of objects.

Usage:
```js
let people = [
  {
    name: 'John Hopley',
    height: '6ft 6"',
    age 32,
   }
   {
     name: 'Cambo',
     height: '5ft 1"',
     age 54
   }
];

pluck(people, 'name');
```
Output:
```js
=> ['John Hopley', 'Cambo']
```

### Collection:Where ###

Takes in a collection returns only the items that watch the conditions (object:param2)

Usage:
```js
let people = [
  {
    name: 'John Hopley',
    jobcode: 12,
    office: 'Liverpool'
  },
  {
    name: 'Lee Easeman',
    jobcode: 12,
    office: 'London'
  },
  {
    name: 'Eric Jones',
    jobcode: 14,
    office: 'Liverpool'
  }
];

where(people, {jobcode: 14, office: 'Liverpool'})
```
Output:
```js
=> [{
  name: 'Eric Jones',
  jobcode: 14,
  office: 'Liverpool'
}]
```

### Number:Between ###

Returns a random number between the min and max given in arguments

Usage:
```js
between(5,10)
```
Output:
```js
=> 6
```

### Number: Is Number ###

Returns true is the passed argument is type of number

Usage:
```js
isNumber(5)
isNumber('5')
```
Output:
```js
=> true
=> false
```

### Object: Deep Assign ###

Extends recursively over multidimensional objects using Object.assign.

Usage:
```js
deepAssign({
  name: 'John',
  age: 25,
  info: {
    email: null,
  }
}, {
  info: {
    email: 'xxx@xxxx.com',
    address: {
      postcode: 'xxxx'
    }
  }
})
```
Output:
```js
=> {
 name: 'John',
 age: 25,
 info: {
 email: 'xxx@xxxx.com',
 address: {
   postcode: 'xxxx'
 }
}
```

### Object: Clone ###

Returns clone of immutable object

Usage:
```js
clone({name: 'John Hopley'})
```
Output:
```js
=> {name: 'John Hopley'}
```

### Object: Is Object ###

Checks if the passed in argument is type of Object

Usage:
```js
isObject({});
```
Output:
```js
=> true
```

### Object: Object Flatten ###

Recursively flatten multidimensional objects

Usage:
```js
objectFlatten({
  name: 'John Hopley',
  address: {
    postcode: 'xxxx',
    city: 'Liverpool'
  }
});
```
Output:
```js
=> {
  '/name': 'John Hopley',
  '/address/postcode': 'xxxx',
  '/address/city': 'Liverpool',
}
```

### Object: types ###

Returns an object describing the property types of passed object

Usage:
```js
types({
  doSomething: () => {},
  doNothing: false,
  count: 5,
  trigger: 'click',
  meta: {}
})
```
Output:
```js
=> {
  doSomething: 'function'
  doNothing: 'boolean',
  count: 'number',
  trigger: 'string',
  meta: 'object'
}
```
