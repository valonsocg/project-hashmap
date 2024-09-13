export default class HashMap {
  constructor(initialSize = 16, loadFactorThreshold = 0.75) {
    this.buckets = new Array(initialSize);
    this.size = 0;
    this.loadFactorThreshold = loadFactorThreshold;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      const [currentKey] = this.buckets[index][i];
      if (currentKey === key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
    this.size++;

    if (this.loadFactor() > this.loadFactorThreshold) {
      this.resize(this.buckets.length * 2);
    }
  }

  get(key) {
    const index = this.hash(key);

    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        const [currentKey, currentValue] = this.buckets[index][i];
        if (currentKey === key) {
          return currentValue;
        }
      }
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      const [currentKey] = bucket[i];
      if (currentKey === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length);
    this.size = 0;
  }

  keys() {
    const keyArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [key] of bucket) {
          keyArray.push(key);
        }
      }
    }
    return keyArray;
  }

  values() {
    const valuesArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [, value] of bucket) {
          valuesArray.push(value);
        }
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [key, value] of bucket) {
          entriesArray.push([key, value]);
        }
      }
    }
    return entriesArray;
  }

  loadFactor() {
    return this.size / this.buckets.length;
  }

  resize(newSize) {
    const oldBuckets = this.buckets;
    this.buckets = new Array(newSize);
    this.size = 0;

    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }
}
