
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Click event listener for Add Chapter button
button.addEventListener('click', function() {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        // Create li element
        const li = document.createElement('li');
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        // Set li content
        li.textContent = input.value.trim();
        
        // Append delete button to li
        li.appendChild(deleteButton);
        
        // Append li to list
        list.appendChild(li);
        
        // Add event listener to delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        // Clear input field
        input.value = '';
        
        // Set focus to input field
        input.focus();
    } else {
        // If input is blank, set focus to input field
        input.focus();
    }
});








// const input = document.querySelector('#favchap');
// const button = document.querySelector('button')
// const list = document.querySelector('ul')

// button.addEventListener('click', function() {  });
// button.addEventListener('click', ()  => { });

// if (input.value != '') { }

// const li = document.createElement('li');

// const deleteButton = document.createElement('button')

// li.textContent = input.value;

// Example
// deleteButton.textContent = '❌';
// li.append(deleteButton);
// list.append(li);

// deleteButton.addEventListener('click', function () {
//     list.removeChild(li);
//     input.focus();
// });

// input.focus();

// input.value = '';