class TrieNode {
  constructor() {
    this.children = {};
    this.endofWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.endofWord = true;
  }

  search(word) {
    let current = this.root;

    for (const char of word) {
      if (!current.children[char]) {
        return false;
      }
    }
    return current.endofWord;
  }

  remove(word) {
    _remove(this.root, word, 0);
  }

  _remove(current, word, index) {
    if (index === word.length) {
      if (!current.endofWord) return false;
      current.endofWord = false;
      return Object.keys(current).length == 0;
    }

    const char = word[index];
    const node = current.children[char];
    if (!node) return false;

    const shouldDelete = _remove(node, word, index++);

    if (shouldDelete) {
      delete current.children[char];
      return Object.keys(current).length == 0 && !current.endofWord;
    }
    return false;
  }

  autoComplete(prefix) {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children[char]) return [];
      current = current.children[char];
    }
    const result = [];
    this.dfs(current, prefix, result);
    return result;
  }

  dfs(node, path, result) {
    if (node.endofWord) {
      result.push(path);
    }
    for (const char in node.children) {
      this.dfs(node.children[char], path + char, result);
    }
  }
}

const trie = new Trie();
trie.insert('pranav');
trie.insert('pro');
trie.insert('promise');
trie.insert('prithviraj');
trie.insert('prithi');
trie.insert('Yohanan');

console.log(trie.autoComplete('pr'));
