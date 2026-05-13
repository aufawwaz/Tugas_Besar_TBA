function generateTable() {
	const states = document
		.querySelector('input[name="states"]')
		.value.split(",");

	const alphabet = document
		.querySelector('input[name="alphabet"]')
		.value.split(",");

	const tableContainer = document.getElementById("transition-table");

	let tableHTML = `
        <table>
            <tr>
                <th>State</th>
    `;

	alphabet.forEach((symbol) => {
		tableHTML += `<th>${symbol}</th>`;
	});

	tableHTML += `</tr>`;

	states.forEach((state) => {
		tableHTML += `
            <tr>
                <td>${state}</td>
        `;

		alphabet.forEach((symbol) => {
			tableHTML += `
                <td>
                    <input 
                        type="text" 
                        name="${state}_${symbol}" 
                        placeholder="-"
                    >
                </td>
            `;
		});

		tableHTML += `</tr>`;
	});

	tableHTML += `</table>`;

	tableContainer.innerHTML = tableHTML;
}
