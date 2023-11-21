// function createElement(elemnt) { return document.createElement(elemnt) }

// const createLi = createElement('li')
// const createSpan = createElement('span')

// const id = createElement('span');
// const username = createElement('span');
// const email = createElement('span');
// const phone = createElement('span');
// const pwd = createElement('span');
// const del = createElement('span');
// const edit = createElement('span');

// id.setAttribute('data-id', '#2')
// username.setAttribute('data-name', 'xXUser2Xx')
// email.setAttribute('data-email', 'exaple@exaple')
// phone.setAttribute('data-phone', '1234-5678')
// pwd.setAttribute('data-pwd', '!PasswordExample1')
// del.setAttribute('data-del', '✕')
// edit.setAttribute('data-edit', '✎')
// createLi.append(id, username, email, phone, pwd, del, edit)

// const getUl = document.getElementById('ul_list');
// getUl.appendChild(createLi);

// const mainElement = document.querySelector('main');
// mainElement.appendChild(getUl);

// document.body.appendChild(mainElement);

const url = 'http://localhost:5500/users';
async function getUsers(url) {
    fetch(url, {
        method: 'GET'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const response = data;
            console.log(response)
            // getUl.innerHTML = '';
            displayUsers(response);
        })
}

function displayUsers(users) {
    users.forEach(user => {
        function createElement(elemnt) { return document.createElement(elemnt) }
        const createLi = createElement('li')

        const id = createElement('span');
        const username = createElement('span');
        const email = createElement('span');
        const phone = createElement('span');
        const pwd = createElement('span');
        const del = createElement('span');
        const edit = createElement('span');

        id.setAttribute('data-id', `${user.usr_id}`)
        username.setAttribute('data-name', `${user.username}`)
        email.setAttribute('data-email', `${user.email}`)
        phone.setAttribute('data-phone', `${user.phone}`)
        pwd.setAttribute('data-pwd', `${user.password}`)
        del.setAttribute('data-del', 'data-del')
        del.setAttribute('id', 'deltbn')
        edit.setAttribute('data-edit', 'data-del')
        createLi.append(id, username, email, phone, pwd, del, edit)

        const getUl = document.getElementById('ul_list');
        getUl.appendChild(createLi);

        const mainElement = document.querySelector('main');
        mainElement.appendChild(getUl);

        // --------------------------  OPEN&CLOSE MODAL    --------------------------
        const modal = document.getElementById('modal');
        del.addEventListener('click', () => modal.showModal());
        const closedelModal = document.getElementById('close-modal');
        closedelModal.addEventListener('click', () => modal.close());
        // --------------------------  DELELTE USER FUNCTION MODAL    --------------------------

    })
}
getUsers(url)