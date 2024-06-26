let tableItems = document.getElementById('tableItems').getElementsByTagName('tbody')[0];
let itemIndex = 1;

function addItems() {
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let year = document.getElementById('year').value;

    if (name && category && year) {
        let newRow = tableItems.insertRow();
        newRow.innerHTML = `
            <td data-label="No.">${itemIndex++}</td>
            <td data-label="Names">${name}</td>
            <td data-label="Category">${category}</td>
            <td data-label="Release Year">${year}</td>
            <td data-label="Edit"><span class="edit-btn" onclick="editItem(this)">✏️</span></td>
            <td data-label="Delete"><span class="delete-btn" onclick="deleteItem(this)">❌</span></td>
        `;

        document.getElementById('name').value = '';
        document.getElementById('category').value = '';
        document.getElementById('year').value = '';
    }
}

function editItem(button) {
    let row = button.parentElement.parentElement;
    document.getElementById('name').value = row.cells[1].innerText;
    document.getElementById('category').value = row.cells[2].innerText;
    document.getElementById('year').value = row.cells[3].innerText;

    deleteItem(button);
}

function deleteItem(button) {
    let row = button.parentElement.parentElement;
    tableItems.deleteRow(row.rowIndex - 1);
    updateIndex();
}

function updateIndex() {
    itemIndex = 1;
    Array.from(tableItems.rows).forEach((row) => {
        row.cells[0].innerText = itemIndex++;
    });
}

function searchItem() {
    let searching = document.getElementById('search').value.toLowerCase();
    Array.from(tableItems.rows).forEach((row) => {
        let itemName = row.cells[1].innerText.toLowerCase();
        if (itemName.includes(searching)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
