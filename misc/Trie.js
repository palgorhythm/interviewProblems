class TrieNode {
  constructor(value = '', children = {}, isEndOfWord = false) {
    this.value = value;
    this.children = children;
    this.isEndOfWord = isEndOfWord;
  }

  insert(word) {
    //* O(k), where k is the word length: inserts a word into the trie.
    let curNode = this;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (curNode.children.hasOwnProperty(letter)) {
        curNode = curNode.children[letter];
      } else {
        curNode.children[letter] = new TrieNode(letter);
        curNode = curNode.children[letter];
      }
      if (i === word.length - 1) {
        curNode.isEndOfWord = true;
      }
    }
  }

  contains(word) {
    //* O(k), where k is the word length: returns a boolean describing whether 'word' is in the trie.
    let curNode = this;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (curNode.children.hasOwnProperty(letter)) {
        curNode = curNode.children[letter];
      } else {
        return false;
      }

      if (i === word.length - 1) {
        return true;
      }
    }
  }

  findAllWithPrefix(prefix) {
    //* O(n), where n is the number of nodes in the tree. worst case when prefix is '' and we return all words in the tree.
    let curNode = this;
    for (let i = 0; i < prefix.length; i++) {
      const letter = prefix[i];
      if (curNode.children.hasOwnProperty(letter)) {
        curNode = curNode.children[letter];
      } else {
        return 'this prefix is not in the trie !';
      }
    }
    // console.log('calling recursive', prefix, curNode);
    return curNode.getAllChildWords(prefix);
  }

  getAllChildWords(prefix) {
    const childWords = [];
    const recurse = (node, word) => {
      if (node.isEndOfWord) {
        childWords.push(word);
      }
      const childrenKeys = Object.keys(node.children);
      if (childrenKeys.length > 0) {
        childrenKeys.forEach(key => {
          recurse(node.children[key], word + node.children[key].value);
        });
      }
    };
    recurse(this, prefix);
    return childWords;
  }
}

const wordArrayToTrie = wordArr => {
  const T = new TrieNode();
  wordArr.forEach(word => {
    T.insert(word);
  });
  return T;
};

const T = new TrieNode(); //* create an empty trie.
T.children['a'] = new TrieNode('a', {}, true); //* add a child to the root "by hand"
T.insert('apple'); //*u se insert on apple. it should branch off of the 'a' we previously added!
T.insert('happy');
console.log('contains happy?', T.contains('happy'), 'expected true');
console.log('contains sad?', T.contains('sad'), 'expected false');
console.log('contains apple?', T.contains('apple'), 'expected true');

T.insert('application');
console.log(T.findAllWithPrefix('app')); //* apple, application
console.log(T.findAllWithPrefix('')); //* returns all words in the trie as an array

const wordArr = [
  'i',
  'in',
  'indie',
  'integer',
  'imbecile',
  'hoot',
  'hooter',
  'happy'
];

console.log(wordArrayToTrie(wordArr).findAllWithPrefix(''));
