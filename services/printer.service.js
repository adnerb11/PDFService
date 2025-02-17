const PdfPrinter =  require('pdfmake');
const fonts = {
    Roboto: {
      normal: 'fonts/Roboto-Black.ttf',
      bold: 'fonts/Roboto-Black.ttf',
      italics: 'fonts/Roboto-Black.ttf',
      bolditalics: 'fonts/Roboto-Black.ttf',
    },
  };
  
  const customTableLayouts = {
    customLayout01: {
      hLineWidth: function (i, node) {
        if (i === 0 || i === node.table.body.length) {
          return 0;
        }
        return i === node.table.headerRows ? 2 : 1;
      },
      vLineWidth: function () {
        return 0;
      },
      hLineColor: function (i) {
        return i === 1 ? 'black' : '#bbbbbb';
      },
      paddingLeft: function (i) {
        return i === 0 ? 0 : 8;
      },
      paddingRight: function (i, node) {
        return i === node.table.widths.length - 1 ? 0 : 8;
      },
      fillColor: function (i, node) {
        if (i === 0) {
          return '#7b90be';
        }
        if (i === node.table.body.length - 1) {
          return '#acb3c1';
        }
  
        return i % 2 === 0 ? '#f3f3f3' : null;
      },
    },
    borderBlue: {
      hLineColor: function () {
        return '#5f96d4';
      },
      vLineColor: function () {
        return '#5f96d4';
      },
    },
  };
class PrinterService {
    printer = new PdfPrinter(fonts);
  
    createPdf(
      docDefinition,
      options = {
        tableLayouts: customTableLayouts,
      },
    ) {
      return this.printer
              .createPdfKitDocument(docDefinition, options)
              
    }
  }
  module.exports = {
    PrinterService
  }