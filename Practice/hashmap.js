/////////////////////////////////////////////////
// 1) Fundamentals
// A hashmap, also known as a dictionary or an associative array, is a data structure that maps keys to values.
// In JavaScript, hashmaps can be implemented using objects or Map objects. Objects are a simple way to implement
// hashmaps, but they have some limitations, such as the fact that keys must be strings and the fact that keys are
// enumerated in the order in which they were added. Map objects were introduced in ECMAScript 6 and provide a more
// flexible and powerful implementation of hashmaps, with support for keys of any type and ordered iteration.
// 2) Collision in hashmap
// Collisions occur when two or more keys are mapped to the same index in the hashmap. In JavaScript,
// collisions can be resolved using various strategies, such as chaining (storing a linked list at each index)
// or probing (searching for an empty slot after a collision). The choice of collision resolution strategy can
// affect the time and space complexity of hashmap operations.

///////////////////////////////////////////////////
////Custom hashtable

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (const n of key) {
      total += n.charCodeAt(0);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const samekey = bucket.find(item => item[0] === key);
      if (samekey) samekey[1] = value;
      else bucket.push([key, value]);
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find(item => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find(item => item[0] === key);
      if (sameKey) {
        bucket.splice(bucket.indexOf(sameKey), 1);
      }
    }
  }
  display() {
    for (const n of this.table) {
      n && n.length && console.log(n);
    }
  }
}

const hashmap = new HashTable(50);
hashmap.set('a', 1);
hashmap.set('b', 2);
hashmap.set('c', 3);
hashmap.set('d', 4);
hashmap.set('e', 5);
hashmap.remove('d');
hashmap.display();
