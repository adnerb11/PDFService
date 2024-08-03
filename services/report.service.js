// const PrinterService = require("./printer.service")
const { getHtmlContent } = require("../helpers/html-to-pdf")
const fs = require("fs");
const { PrinterService } = require("./printer.service");
 const  getHtmlReport= (path, replacements )=> {
    const html = fs.readFileSync(path, 'utf8');

    const content = getHtmlContent(html, replacements);

    const docDefinition = {
      pageMargins: [40, 110, 40, 60],      
      content: content,
    };
    ps = new PrinterService()

    const doc = ps.createPdf(docDefinition);
    
    
    return doc;
  }
module.exports ={
    getHtmlReport
}