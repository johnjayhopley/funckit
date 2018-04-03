# README #

FuncKit is a granular ES6 library for indervidual functional methods. This allows you to include the methods nessesary for your project with out including a wide unnesseary rage of library attachments.

### NPM Installation ###

```shell
$ npm install funckit -save
```

### Method Usage ###

```js
import assignDeep from 'funckit\object\assignDeep';
import chunk from 'funckit\array\chunk';

```

### Array:Chunk ###

Splits array into chunks using the specifed size.

```js
chunks([1,2,3,4,5,6,7,8,9, 10], 3)
// => [[1,2,3],[4,5,6],[7,8,9],[10]]
```

### Array:Compact ###

Removes and null, false and undefined values from the passed array

```js
compact(1,false, undefined,null,2)
// => [1,2]
```

### Array:Compress ###

Takes in multiple array types and merges into a new array accordingly

```js
compress([1,2,3,4],[5,6,7],[8,9,10])
// => [[1,2,3,4],[5,6,7],[8,9,10]]
```

### Array:Diff ###

Retuns the diffrence between two arrays

```js
diff([1,2,3,4],[1,2,3,4,5,6,7])
// => [5,6,7]
```

### Array:First ###

Returns the first value of passed array

```js
diff([1,2,3,4])
// => 1
```

### Array:Flatten ###

Flattens nested arrays

```js
flatten([1,[2],[[3]]])
// => [1,2,3]
```

### Array:Intersection ###

Takes in multiple array types and returns all values contained in every array

```js
intersection([1,2,3,4],[2,3,4],[1,2,2,3,3])
// => [2,3]
```

### Array:Last ###

Retuns the last value of the passed in array

```js
Flatten([1,2,3,4,5])
// => 5
```

### Array:Merge ###

Meges all values from all passed in array arugments in to the onw array

```js
merge([1,2,3,4],[5,6,7,8],[9,10])
// => [1,2,3,4,5,6,7,8,9,10]
```

### Array:Occurrences ###

Returns the amount of occurrences of a value in the passed array

```js
occurrences([1,2,1,2,1,2,1],2)
// => 3
```

### Array:Pick ###

Retuns the array value by index if it exists in the given array

```js
pick(['John', 'Is', 'King'], 2)
// => 'King'
```

### Array:Range ###

Retuns the values of an array  between the start and end arguments

```js
range([1,2,3,4,5,6,7,8,9], 4, 9)
// => [5,6,7,8,9]
```

### Array:Shuffle ###

Returns all the values from the passed array in a randomised order

```js
shuffle([1,2,3,4,5,6])
// => [2,5,4,1,3,6]
```

### Array:Unique ###

Removes all dublicate entries from the passed array

```js
unique([1,1,1,2,2,3])
// => [1,2,3]
```

### Array:Without ###

Removes all specified values from the passed array

```js
without(['John', 'Cambo', 'Dan', 'Tom']], 'Tom', 'Dan');
// => ['John', 'Cambo']
```

### Collection:HasMany ###

Joins entries from one collection to multiple others using a primary and foreign key to identifiy the relationship

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

hasMany(people, 'id', 'person_id', addresses, info);
// => [{
//  id: 2,
//  name: 'steff',
//  age: 27,
//  address: {
//    id: 1,
//    person_id: 2,
//    postcode: 'l12pa'
//  },
//  info: {
//    id: 1,
//    person_id: 2,
//    bio: 'Steff loves his ginger locks.'
//  }
// }]
```

### Collection:HasOne ###

Joins entries from one collection to another using a primary and foreign key to identifiy the relationship

```js
const people = [
  {
    id: 2,
    name: 'steff',
    age: 27,
  }
 ]
 *
const addresses = [
  {
    id: 1,
    person_id: 2,
    postcode: 'l12pa'
  }
];
 *
hasOne(people, addresses, 'id', 'person_id', 'address')
// => [{
//   id: 2,
//   name: 'steff',
//   age: 27,
//   address: {
//     id: 1,
//     person_id: 2,
//     postcode: 'l12pa'
//   }
// }]
```

### Collection:Pluck ###

Plucks and returns all instances of the specified property in a collection of objects.

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

// => ['John Hopley', 'Cambo']
```


### Collection:Where ###

This needs amending to take an object as the second paramater

```js
// Comming soon
```

