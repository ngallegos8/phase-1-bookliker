// document.addEventListener("DOMContentLoaded", function() {});


// function getAllBooks() {
//     fetch ("http://localhost:3000/books")
//     .then (res => res.json)
//     .then (books => books.forEach(book => renderBookTitle(book)))
// }

// function renderBookTitle(book) {
//     const booksListed = document.getElementById("#list")
//     const newList = document.createElement("li")
//     newList.textContent = book.renderBookTitle
//     booksListed.appendChild(newList)

//     newList.addEventListener("click", () => showDetails(book))
// }

// function showDetails(book) {
//     const showPanel = document.getElementById("show-panel")
//     const title = document.createElement("h1")
//     const subtitle = document.createElement("h1")
//     const description = document.createElement("p")
//     const author = document.createElement("h1")
//     const image = document.createElement("img")
//     const users = document.createElement("li")
//     const button = document.createElement("button")

//     title.textContent = book.title
//     subtitle.textContent = book.subtitle
//     description.textContent = book.description
//     author.textContent = book.author
//     image.src = book.img_url

//     book.user.forEach((user) => {
//         const userList = document.createElement("li")
//         userList.textContent = user.username
//         users.appendChild(userList)
//     })

//     button.textContent = "I like this book"

//     while(showPanel.firstChild) {
//         showPanel.removeChild(showPanel.lastChild)
//     }

//     likeButton.addEventListener("click", () => submitLike(book))
//     showPanel.appendChild(title, subtitle, author, description, thumbnail, users, likeButton)
// }



// function addList() {
//     const newList = document.createElement("li")
//     newList.appendChild(getAllBooks);
//     const currentList = document.getElementById("#list")
//     document.body.insertBefore(newList, currentList);
// }







// document.addEventListener("DOMContentLoaded", getAllBooks);

//     function getAllBooks() {
//         fetch("http://localhost:3000/books")
//         .then(response => response.json())
//         .then(books => books.forEach(book => renderBookTitle(book)))
//     }

//     function renderBookTitle(book) {
//         const booksListed = document.getElementById("list")
//         const newList = document.createElement("li")
//         newList.textContent = book.title
//         booksListed.append(newList)

//         newList.addEventListener("click", () => showDetails(book))
//     }

//     function showDetails(book) {
//         const showPanel = document.getElementById("show-panel")
//         const title = document.createElement("h1")
//         const subtitle = document.createElement("h2")
//         const description = document.createElement("p")
//         const author = document.createElement("21")
//         const thumbnail = document.createElement("img")
//         const users = document.createElement("li")
//         const button = document.createElement("button")

//         title.textContent = book.title
//         subtitle.textContent = book.subtitle
//         description.textContent = book.description
//         author.textContent = book.author
//         thumbnail.src = book.img_url
//         button.textContent = "Good Read"

//         book.users.forEach(user => {
//             const userListItem = document.createElement("li")
//             userListItem.textContent = user.username
//             users.append(userListItem)
//         })


//         button.addEventListener("click", () => submitLike(book))
//         showPanel.append(title, subtitle, author, description, thumbnail, users, button)


//     function submitLike(book) {
//         fetch(`http://localhost:3000/books/${book.id}`, {
//             method: "PATCH",
//             headers: { 
//                 "Content-Type": "application/json" 
//             },
//             body: JSON.stringify({ "users": [...book.users, { "id": 1, "username": "pouros"} ] })
//         })
//         .then(response => response.json())
//         .then(book => showDetails(book))
//         .then (book => console.log(book))
//     }
// }





//////// WORKS /////////
// document.addEventListener("DOMContentLoaded", getAllBooks);

// function getAllBooks() {
//     fetch("http://localhost:3000/books")
//     .then(response => response.json())
//     .then(books => books.forEach(book => renderBookTitle(book)))
// }

// function renderBookTitle(book) {
//     const booksListed = document.getElementById("list")
//     const newList = document.createElement("li")
//     newList.textContent = book.title
//     booksListed.append(newList)

//     newList.addEventListener("click", () => showBookDetail(book))
// }

// function showBookDetail(book) {
//     const showPanel = document.getElementById("show-panel")
//     const title = document.createElement("h1")
//     const subtitle = document.createElement("h1")
//     const description = document.createElement("p")
//     const author = document.createElement("h1")
//     const thumbnail = document.createElement("img")
//     const users = document.createElement("ul")
//     const likeButt = document.createElement("button")

//     title.textContent = book.title
//     subtitle.textContent = book.subtitle
//     description.textContent = book.description
//     author.textContent = `By ${book.author}`
//     thumbnail.src = book.img_url
//     likeButt.textContent = "Good Read"

//     book.users.forEach(user => {
//         const userList = document.createElement("li")
//         userList.textContent = user.username
//         users.append(userList)
//     })

//     likeButt.addEventListener("click", () => submitLike(book))
//     showPanel.append(title, subtitle, author, description, thumbnail, users, likeButt)
// }

// function submitLike(book) {
//     fetch(`http://localhost:3000/books/${book.id}`, {
//         method: "PATCH",
//         headers: { 
//             "Content-Type": "application/json" 
//         },
//         body: JSON.stringify({ "users": [...book.users, { "id": 1, "username": "pouros"} ] })
//     })
//     .then(res => res.json())
//     .then(book => showBookDetail(book))
//     .then(book => console.log(book))
// }
////////  END WORKS /////////


////// TRYING DELETE BUTTON ///////
document.addEventListener("DOMContentLoaded", getAllBooks);

function getAllBooks() {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(books => books.forEach(book => renderBookTitle(book)))
}

function renderBookTitle(book) {
    const booksListed = document.getElementById("list")
    const newList = document.createElement("li")
    newList.textContent = book.title
    booksListed.append(newList)

    newList.addEventListener("click", (e) => showBookDetail(book, e))
}

function showBookDetail(book) {
    const showPanel = document.getElementById("show-panel")
    const title = document.createElement("h1")
    const subtitle = document.createElement("h1")
    const description = document.createElement("p")
    const author = document.createElement("h1")
    const thumbnail = document.createElement("img")
    const users = document.createElement("ul")
    const likeButt = document.createElement("button")

    title.textContent = book.title
    subtitle.textContent = book.subtitle
    description.textContent = book.description
    author.textContent = `By ${book.author}`
    thumbnail.src = book.img_url
    likeButt.textContent = "Good Read"

    book.users.forEach(user => {
        const userList = document.createElement("li")
        userList.textContent = user.username
        users.append(userList)
    })

    likeButt.addEventListener("click", (e) => submitLike(book, e))
    // likeButt.addEventListener('click', (e) => {
    //     handleDelete(book, e)
    // })
    // likeButt.addEventListener("change", (e) => handleUpdate(book, e))
    showPanel.append(title, subtitle, author, description, thumbnail, users, likeButt)
}

function submitLike(book) {
    fetch(`http://localhost:3000/books/${book.id}`, {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ "users": [...book.users, { "id": 1, "username": "pouros"} ] })
    })
    .then(res => res.json())
    .then(book => showBookDetail(book))
    .then(book => console.log(book))
}

////// END TRYING DELETE BUTTON ///////