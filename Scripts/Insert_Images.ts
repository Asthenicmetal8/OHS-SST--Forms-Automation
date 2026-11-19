function main(
  workbook: ExcelScript.Workbook,
  url: string,
  b64_1: string,
  b64_2: string = "" // We’re setting a default value, just in case.
) {
  // 1. We join the two parts together to form the complete image.
  const base64 = b64_1 + b64_2;

  const hoja = workbook.getWorksheet("Formulario");
  const ultimaFila = hoja.getUsedRange().getLastRow().getRowIndex();
  const celda = hoja.getCell(ultimaFila, 14);

  // 2. We verify that it is the correct row
  if (celda.getValue() === url) {
    celda.clear(ExcelScript.ClearApplyTo.contents);

    const imagen = hoja.addImage(base64);
    imagen.setLeft(celda.getLeft());
    imagen.setTop(celda.getTop());
    imagen.setWidth(celda.getWidth());
    imagen.setHeight(celda.getHeight());
    imagen.setPlacement(ExcelScript.Placement.twoCell);

    return "Success: Image inserted without timeouts";
  }
  return "Error: URL not found in the last row";
}