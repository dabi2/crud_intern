document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const saveBtn = document.getElementById('saveBtn');
    const documentList = document.getElementById('documentList');
  
    // Load documents on page load
    loadDocuments();
  
    saveBtn.addEventListener('click', () => {
      const content = editor.innerHTML;
      saveDocument(content);
    });
  
    function saveDocument(content) {
      // Send an AJAX request to the PHP server to save the document
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'server.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        if (xhr.status === 200) {
          loadDocuments();
          editor.innerHTML = ''; // Clear the editor after saving
        }
      };
      xhr.send(`content=${encodeURIComponent(content)}`);
    }
  
    function loadDocuments() {
      // Send an AJAX request to the PHP server to retrieve the list of documents
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'server.php', true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          const documents = JSON.parse(xhr.responseText);
          displayDocuments(documents);
        }
      };
      xhr.send();
    }
  
    function displayDocuments(documents) {
      documentList.innerHTML = '';
      documents.forEach((doc) => {
        const listItem = document.createElement('div');
        listItem.textContent = doc.name;
        listItem.addEventListener('click', () => {
          // Load the selected document into the editor
          editor.innerHTML = doc.content;
        });
        documentList.appendChild(listItem);
      });
    }
  });
  