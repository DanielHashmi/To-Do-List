// Targeting already declared elements
let inp = document.getElementsByClassName('inp')[0];
let btn = document.getElementsByClassName('btn')[0];
let lists = document.getElementsByClassName('lists')[0];


// Adding an event
btn.addEventListener('click', () => {
    // Creating elements
    let list = document.createElement('div');
    let h2 = document.createElement('h2');
    let items = document.createElement('div');
    let mark = document.createElement('i');
    let trash = document.createElement('i');

    // Giving classNames to the elements
    list.className = "list";
    h2.className = "h2";
    mark.className = "mark fas fa-check-square";
    trash.className = "trash fas fa-trash";
    items.className = "items";

    // Setting the values
    h2.innerHTML = inp.value;
    inp.value = "";

    // Adding events to the mark & trash
    mark.addEventListener('click', () => {
        if (mark.style.color == "rgba(44, 203, 35, 0.36)") {
            mark.style.color = "#2bcb23"
        } else {
            mark.style.color = "rgba(44, 203, 35, 0.36)"
        }
    })
    trash.addEventListener('click', () => {
        lists.removeChild(list)
    })

    // Appending Childs
    items.appendChild(mark);
    items.appendChild(trash);
    list.appendChild(h2);
    list.appendChild(items);
    lists.appendChild(list);
})