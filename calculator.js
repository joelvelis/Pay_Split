
	let body = document.body;
	let amount1 = document.getElementById('amount1').value;
	let tr = document.createElement('tr');
	tr.innerText = "Your total is " + amount1;
	body.append(tr);
