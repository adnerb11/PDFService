const  htmlToPdfmake = require('html-to-pdfmake');
const  { JSDOM } = require('jsdom');
const getHtmlContent = (
    html,
    replacers,
  ) => {
    Object.entries(replacers).forEach(([key, value]) => {
      const key1 = `{{ ${key} }}`;
      const key2 = `{{${key}}}`;
  
      html = html.replaceAll(key1, value).replaceAll(key2, value);
    });
  
    const { window } = new JSDOM();
  
    return htmlToPdfmake(html, { window });
  };
  module.exports = {
    getHtmlContent
  }