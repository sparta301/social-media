function save() {
    const thread = document
        .getElementById('thread')
        .value;

    const newThread = {
        thread
    };
    console.log(newThread);

    newThreadParagraph = `
	Thread: ${newThread.thread}
  `;
    console.log(newThreadParagraph);

    const listItem = document.createElement("li");
              var nodeThread = document.createTextNode(newThreadParagraph);
                    listItem.appendChild(nodeThread);
                    document
                    .getElementById("threadResult")
                        .appendChild(listItem);

    const arrThread = [];
    arrThread.push(newThread)

    localStorage.setItem('thread', JSON.stringify(arrThread));
    var retrievedObject = JSON.parse(localStorage.getItem('arrThread'));
    console.log(retrievedObject);
};
