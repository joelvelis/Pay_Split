function myClick() {
	let body = document.body;
	let amount1 = document.getElementById('amount1').value;
	let tr = document.createElement('tr');
	tr.innerText = amount1 * .15;
	body.append(tr);
}