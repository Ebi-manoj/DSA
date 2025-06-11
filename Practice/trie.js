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
}

const trie = new Trie();
trie.insert('Ebi');
trie.insert('Yohanan');
