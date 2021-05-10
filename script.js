const perPage = 10; //number of data can be set for per page
const totalContent = pagination.length; // total length of given content
const pages = totalContent / perPage;  //number of data can be set for per page
const numOfPages = range(1, pages, 1);

//iterates through pagination array and formats each data for corresponding page
const formattedInfo = {};
let dataPerPage = [];
let page = 1; 
pagination.forEach((item, index) => {
    const orgIndex = index + 1
    if(orgIndex % perPage === 0) {
        formattedInfo[page] = dataPerPage;
        page += 1;
        dataPerPage = [];
    }
    dataPerPage.push(item)
})


//creating div and set the class for css
const container = document.createElement('div');
container.setAttribute('class', 'container');

//creating h2 tag, given the inner text, set class for css and add to the dom
const heading = document.createElement('h2');
heading.innerText = 'Pagination in DOM Manipulation';
heading.setAttribute('class', 'heading');
document.body.append(heading);

//creating a div tag
const contentParentDiv = document.createElement('div');

//creating a table tag
const table = document.createElement('table');

//creating a thead tag, set class for css
const thead = document.createElement('thead');
thead.setAttribute('class', 'tableBorder');

//creating th tag, set inner text for tag, set class for css and adding id to thead
const id = document.createElement('th');
id.innerText = 'Id';
id.setAttribute('class', 'tableId');
thead.appendChild(id)

//creating th tag, set inner text for tag, set class for css and adding nameHeader to thead
const nameHeader = document.createElement('th');
nameHeader.innerHTML = 'Name';
nameHeader.setAttribute('class', 'table');
thead.appendChild(nameHeader);

//creating th tag, set inner text for tag, set class for css and adding email to thead
const email = document.createElement('th');
email.innerHTML = 'Email';
email.setAttribute('class', 'table');
thead.appendChild(email);

//adding thead tag to table
table.appendChild(thead);

//adding table to contentdive
contentParentDiv.appendChild(table);

// creating div tag, set class for css
const paginateParentDiv = document.createElement('div');
paginateParentDiv.setAttribute('class', 'right-corner')

//adding contentParentDiv to container
container.appendChild(contentParentDiv);

//adding paginateParentDiv to container
container.appendChild(paginateParentDiv);

//adding container to DOM
document.body.append(container);

//creating pagination button through loop, creating onclick function, call loadpage function
    // set value to the button, set class for css and adding pagebutton to paginaeParentDiv
numOfPages.forEach((pageNum) => {
    const pageButton = document.createElement('button');
    pageButton.innerText = pageNum;
    pageButton.onclick = (e) => {
        const currentPage = e.target.value;
        loadPage(currentPage);
    }
    pageButton.setAttribute('id', 'page-button');
    pageButton.setAttribute('value', pageNum);
    pageButton.setAttribute('class', 'button')
    paginateParentDiv.appendChild(pageButton);
})

// return array of number for button
function range(start, stop, step) {
    const a = [start];
    let b = start;
    while (b < stop) {
        a.push(b += step || 1);
    }
    return a;
};


function loadPage(pageNum) {
    //remove tr (row tag) iterates through data
    Array.from(document.getElementsByTagName('tr')).forEach((item) => {
        item.remove();
    })
    formattedInfo[pageNum].forEach((item, index) => {

        //creating a tr tag for each loop, set class for css
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'tableBorder')

        // creating td tag, set inner text, set class for css and adding idValue to tableRow
        const idValue = document.createElement('td');
        idValue.innerHTML = item.id;
        idValue.setAttribute('class', 'tableId');
        tableRow.appendChild(idValue);

        // creating td tag, set inner text, set class for css and adding nameValue to tableRow
        const nameValue = document.createElement('td');
        nameValue.innerHTML = item.name;
        nameValue.setAttribute('class', 'table');
        tableRow.appendChild(nameValue);

        // creating td tag, set inner text, set class for css and adding emailValue to tableRow
        const emailValue = document.createElement('td');
        emailValue.innerHTML = item.email;
        emailValue.setAttribute('class', 'table');
        tableRow.appendChild(emailValue);

        //adding tableRow to table
        table.appendChild(tableRow);
    })
}

//after page load this function calls
window.onload = function() {
    const firstPage = 1;
    loadPage(firstPage);
};