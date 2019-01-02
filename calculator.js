let body = document.body;
let tr = document.createElement('tr');
let input = document.createElement('input');
let table = document.getElementById('myTable')
let row = table.insertRow();
let td1 = row.insertCell();
let td2 = row.insertCell();
let td3 = row.insertCell();


function myClick() {
	let amount1 = document.getElementById('amount1').value;
	tr.innerText = amount1 * .15;
	body.append(tr);
}

function addItem() {
	td1.innerHTML = "";
	td2.innerHTML = "";
	td3.innerHTML = "Amount2 ";
	td3.append(input);

}