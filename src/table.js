const isNonEmptyArray = (arrayElement) => {
  return Array.isArray(arrayElement) && arrayElement.length > 0;
};

const createTable = (columnsArray, dataArray, tableId) => {
  if (
    !isNonEmptyArray(columnsArray) ||
    !isNonEmptyArray(dataArray) ||
    !tableId
  ) {
    throw new Error(
      `Para a correta execução, precisamos de um array com as colunas, outro com as informações das linhas e também o id do elemento selecionado.`
    );
  }
  const tableElement = document.getElementById(tableId);
  if (!tableElement || tableElement.nodeName !== "TABLE") {
    throw new Error("Id informado não corresponde a nenhum elemento table.");
  }

  createTableHeader(tableElement, columnsArray);
  createTableBody();
};

function createTableHeader(tableReference, columnsArray) {
  function createTheadElement(tableReference) {
    const thead = document.createElement("thead");
    tableReference.appendChild(thead);
    return thead;
  }
  const tableHeaderReference =
    tableReference.querySelector("thead") ?? createTheadElement(tableReference);
  const headerRow = document.createElement("tr");
  for (const tableColumnObject of columnsArray) {
    const headerElement = /*html*/ `<th class="text-center"> ${tableColumnObject.columnLabel}</th>`;
    headerRow.innerHTML += headerElement;
  }
  tableHeaderReference.appendChild(headerRow);
}

function createTableBody() {}
