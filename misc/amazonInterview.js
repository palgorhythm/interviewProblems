// Search for all files in a filesystem that are between a specific file size range.
// You will receive multiple search requests in fast succession for size ranges which or may or may not overlap.
// Ex. Find all files between 10MB and 100MB, then between 50MB and 80MB, then between 100MB and 1000MB.
// Method signature: Given root node of filesystem and file size range
// Each file object including root has fileSize and children
// If a file object has children, then it's fileSize is 0
// Return all files that match criteria as response

// 10, 1000, inclusive
const ex = {
  fileSize: 0,
  children: [
    {
      fileSize: 105,
      children: []
    },
    { fileSize: 300, children: [] }
  ]
};

// searchWithinRange(ex, 0, 1000);

const cache = {
  0: [],
  100: [], // first child of ex is pushed here.
  200: [],
  300: [],
  400: [],
  500: []
}; // "100,300": [{fileSize: 105, children: []}, {fileSize: 200, children: []}]
// max file size is 500, for example.
const searchWithinRange = (rootNode, min, max) => {
  const matches = [];
  const recurse = node => {
    if (node.children.length === 0) {
      if (node.fileSize >= min && node.fileSize <= max) {
        matches.push(node);
      }
      return;
    }
    node.children.forEach(child => {
      recurse(child);
    });
  };
  recurse(rootNode);
  return matches;
};

searchWithinRange(ex, 0, 200); // add 1 node to our 100 bucket.
searchWithinRange(ex, 100, 500); //
