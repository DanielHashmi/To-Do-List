// Targeting already declared elements
let inp = document.getElementsByClassName('inp')[0];
let submit = document.getElementsByClassName('submit')[0];
let lists = document.getElementsByClassName('lists')[0];

// Adding EventListener to the submit button
submit.addEventListener('click', () => {

    // Getting the objects from the localStorage
    let localData = JSON.parse(localStorage.getItem("data")) || [];

    // Creating an object
    let object = {
        datas: inp.value
    }

    // Pushing the objects inside the localStorage array
    localData.push(object)

    // Setting the objects inside the localStorage
    localStorage.setItem('data', JSON.stringify(localData))

    // Calling the main function randerDisplay
    randerDisplay()
})

// Adding keydown Event to the input box 
inp.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {

        // Getting the objects from the localStorage
        let localData = JSON.parse(localStorage.getItem("data")) || [];

        // Creating an object
        let object = {
            datas: inp.value
        }

        // Pushing the objects inside the localStorage array
        localData.push(object)

        // Setting the objects inside the localStorage
        localStorage.setItem('data', JSON.stringify(localData))

        // Calling the main function randerDisplay
        randerDisplay()
    }
})

// Creating the main function randerDisplay
function randerDisplay() {
    // Removeing all extra data from the page
    lists.innerHTML = "";

    // Getting the objects from the localStorage
    let localData = JSON.parse(localStorage.getItem("data")) || [];

    // Adding forEach loop to all of the objects in the localStorage array
    localData.forEach(obj => {
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
        h2.innerHTML = obj.datas;
        inp.value = "";

        // Adding events to the mark & trash
        mark.addEventListener('click', () => {
            if (mark.style.color != "rgb(43, 203, 35)") {
                mark.style.color = "rgb(43, 203, 35)"
            } else {
                mark.style.color = "rgba(44, 203, 35, 0.36)"
            }
        })
        trash.addEventListener('click', () => {
            list.remove()
            localData = localData.filter(text => text !== obj)
            localStorage.setItem('data', JSON.stringify(localData))

        })

        // Appending Childs
        items.appendChild(mark);
        items.appendChild(trash);
        list.appendChild(h2);
        list.appendChild(items);
        lists.appendChild(list);
        localStorage.setItem('data', JSON.stringify(localData))
    });
}

// Calling the main function randerDisplay
randerDisplay()
