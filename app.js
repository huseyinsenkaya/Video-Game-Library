document.addEventListener('DOMContentLoaded', function () {
    //delete game
    const list = document.querySelector('.game-list ul');
    list.addEventListener('click', e => {
        if (e.target.className === 'delete-button') {
            let li = e.target.parentElement;
            list.removeChild(li);
        }
    });

    //add-game
    const addForm = document.forms["add-game"];
    addForm.addEventListener('submit', e => {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;


        //create list elements
        const listElement = document.createElement('li');
        listElement.classList.add('list');
        const gameName = document.createElement('span');
        gameName.classList.add('list-bullet');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');

        //add content
        deleteButton.textContent = 'delete';
        gameName.textContent = value;

        //append to listElements
        listElement.appendChild(gameName);
        listElement.appendChild(deleteButton);
        list.appendChild(listElement);
    });

    //hide games
    const hideBox = document.querySelector('#check-box-click')
    hideBox.addEventListener('change', function () {
        if (hideBox.checked)
            list.style.display = 'none';
        else {
            list.style.display = 'initial';
        }
    });

    //search games
    const searchBar = document.forms['search-games'].querySelector('input');
    searchBar.addEventListener('keyup', e => {
        const temp = e.target.value.toLowerCase();
        const games = list.querySelectorAll('.list');
        games.forEach(game => {
            const title = game.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(temp) !== -1) {
                game.style.display = 'flex';
            }
            else {
                game.style.display = 'none';
            }
        });
    })

    //tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(panel => {
                if (panel === targetPanel) {
                    panel.classList.add('active');
                }
                else {
                    panel.classList.remove('active');
                }
            })
        }
    })
});