const express = require("express")
const {PORT}  = require("./config")
const fileUpload = require('express-fileupload');
const fs = require("fs")
const services = require("./services/report.service");
const { ok } = require("assert");
const app = express()
app.use(express.json())
app.use(fileUpload({
    createParentPath: true
}));
app.post('/api/pdf', (req, res, next) => {
    const {htmlFile,  replace} = req.body    
    const pdfDoc= services.getHtmlReport(htmlFile,replace)
    res.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(res);
    pdfDoc.end();
    console.log(res)
    return {
        "res" :"pdf generated",
        "status" : 200
    }

})
    
  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})