// chrome.bookmarks.getTree((tree) => {
//   const list = document.getElementById('list');
  
//   displayBookmarks(tree[0].children, list);
// })

chrome.bookmarks.getSubTree('1', (tree) => {
  const list = document.getElementById('list');
  displayBookmarks(tree[0].children, list)
});

function displayBookmarks(nodes, parentNode) {
  for (const node of nodes) {
    if (node.url) {
      const listItem = document.createElement('li');
      const itemLink = document.createElement('a');
      itemLink.href = node.url
      itemLink.textContent = node.title;
      listItem.appendChild(itemLink)
      // listItem.textContent = node.title;
      parentNode.appendChild(listItem);
    }

    // If the node has children, recursively display them
    if (node.children) {
      const headerItem = document.createElement('li');
      headerItem.style.fontWeight = '800';
      headerItem.textContent = node.title;
      const sublist = document.createElement('ul');
      parentNode.appendChild(headerItem);
      parentNode.appendChild(sublist);
      displayBookmarks(node.children, sublist);
    }
  }
}
