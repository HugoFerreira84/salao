const accountForm = document.getElementById('accountForm');
const clientNameInput = document.getElementById('clientName');
const serviceInput = document.getElementById('service');
const amountInput = document.getElementById('amount');
const employeeNameInput = document.getElementById('employeeName');
const commissionInput = document.getElementById('commission');
const expenseInput = document.getElementById('expense');

accountForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const clientName = clientNameInput.value;
    const service = serviceInput.value;
    const amount = amountInput.value;
    const employeeName = employeeNameInput.value;
    const commission = commissionInput.value;
    const expense = expenseInput.value;
    
    const rowData = [clientName, service, amount, employeeName, commission, expense];
    addRowToTable(rowData);
    
    // Limpar campos
    clientNameInput.value = '';
    serviceInput.value = '';
    amountInput.value = '';
    employeeNameInput.value = '';
    commissionInput.value = '';
    expenseInput.value = '';
});

function addRowToTable(data) {
    const table = document.getElementById('accountTable').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    
    for (let i = 0; i < data.length; i++) {
        const cell = row.insertCell();
        cell.innerHTML = data[i];
    }
}

const generateInvoiceButton = document.getElementById('generateInvoiceButton');
generateInvoiceButton.addEventListener('click', function() {
    const tableData = document.getElementById('accountTable').getElementsByTagName('tbody')[0].rows;
    
    let invoiceText = 'Cupom Fiscal\n\n';
    
    for (let i = 0; i < tableData.length; i++) {
        const rowData = tableData[i].cells;
        
        invoiceText += 'Cliente: ' + rowData[0].innerHTML + '\n';
        invoiceText += 'Serviço: ' + rowData[1].innerHTML + '\n';
        invoiceText += 'Valor: ' + rowData[2].innerHTML + '\n';
        invoiceText += 'Colaborador: ' + rowData[3].innerHTML + '\n';
        invoiceText += 'Comissão: ' + rowData[4].innerHTML + '\n';
        invoiceText += 'Despesa: ' + rowData[5].innerHTML + '\n';
        
        invoiceText += '\n';
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Cupom Fiscal</title><style>@media print{body{padding:20px}}</style></head><body><pre>' + invoiceText + '</pre></body></html>');
    printWindow.document.close();
    printWindow.print();
});
