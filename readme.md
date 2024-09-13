# HashMap Implementation in JavaScript

This project implements a HashMap data structure in JavaScript. It provides an efficient way to store and retrieve key-value pairs using a hash table approach.

## Files

The project consists of two main JavaScript files:

1. `hashmap.js`: Implements the HashMap class with various methods.
2. `main.js`: Contains example usage of the HashMap class.

## HashMap Class

The HashMap class provides the following methods:

- `constructor(initialSize = 16, loadFactorThreshold = 0.75)`: Initializes the HashMap with a given size and load factor threshold.
- `hash(key)`: Generates a hash code for the given key.
- `set(key, value)`: Adds a key-value pair to the HashMap or updates the value if the key already exists.
- `get(key)`: Retrieves the value associated with the given key.
- `has(key)`: Checks if a key exists in the HashMap.
- `remove(key)`: Removes a key-value pair from the HashMap.
- `length()`: Returns the number of key-value pairs in the HashMap.
- `clear()`: Removes all key-value pairs from the HashMap.
- `keys()`: Returns an array of all keys in the HashMap.
- `values()`: Returns an array of all values in the HashMap.
- `entries()`: Returns an array of all key-value pairs in the HashMap.
- `loadFactor()`: Calculates the current load factor of the HashMap.
- `resize(newSize)`: Resizes the HashMap to the specified new size.

## Key Features

1. **Dynamic Resizing**: The HashMap automatically resizes when the load factor exceeds the threshold, ensuring efficient performance as the number of elements grows.

2. **Collision Handling**: The implementation uses chaining to handle collisions, where each bucket is an array that can hold multiple key-value pairs.

3. **Efficient Operations**: The average time complexity for basic operations (set, get, remove) is O(1), with worst-case O(n) when there are many collisions.

## Usage

To use the HashMap, import the class and create a new instance:

```javascript
import HashMap from "./hashmap.js";

const map = new HashMap();

map.set("apple", "red");
map.set("banana", "yellow");

console.log(map.get("apple")); // Output: "red"
console.log(map.has("banana")); // Output: true

map.remove("apple");
console.log(map.length()); // Output: 1

console.log(map.keys()); // Output: ["banana"]
console.log(map.values()); // Output: ["yellow"]
console.log(map.entries()); // Output: [["banana", "yellow"]]
```

## Running the Project

Ensure you have Node.js installed on your system. Then, you can run the `main.js` file to see the HashMap in action:

```
node main.js
```

This will execute the example code and display the output in your console.

## Performance Considerations

- The default initial size is 16 buckets, which can be adjusted in the constructor.
- The default load factor threshold is 0.75, meaning the HashMap will resize when it's 75% full.
- The hash function uses a simple algorithm that may not be suitable for all use cases. Consider implementing a more robust hash function for production use.

## Contributing

Feel free to fork this project and submit pull requests with improvements or additional features for the HashMap implementation.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
