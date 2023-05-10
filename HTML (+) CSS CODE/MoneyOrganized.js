document.getElementById('expForm').addEventListener('submit', addExpense);
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(e){
    e.preventDefault();

    // get type, name, date, and amount
    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let amount = document.getElementById('amount').value;

    if(type != 'chooseOne' 
        && name.length > 0 
        && date != 0 
        && amount > 0){
        const expense = {
            type, 
            name, 
            date,
            amount, 
            id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
        }

        expenses.push(expense);
        // localStorage 
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    document.getElementById('expForm').reset();
    showExpenses();
}

const showExpenses = () => {

    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < expenses.length; i++){
        expenseTable.innerHTML += `
            <tr>
                <td>${expenses[i].type}</td>
                <td>${expenses[i].name}</td>
                <td>${expenses[i].date}</td>
                <td>$${expenses[i].amount}</td>
                <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
                    Delete</td>
            </tr>
        `;
    }
}

const deleteExpense = (id) => {
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].id == id){
            expenses.splice(i, 1);
        }
    }

    localStorage.setItem('expenses', JSON.stringify(expenses));
    showExpenses();
}

showExpenses();

function percentage_1() {
  
    // Method returns the element of percent id
    var percent = document.getElementById("percent").value;
      
    // Method returns the element of num id
    var num = document.getElementById("num").value;
    document.getElementById("value1")
        .value = (num / 100) * percent;
}
  
function percentage_2() {
  
    // Method returns the element of num1 id
    var num1 = document.getElementById("num1").value;
      
    // Method returns the elements of num2 id
    var num2 = document.getElementById("num2").value;
    document.getElementById("value2")
            .value = (num1 * 100) / num2 + "%";
}