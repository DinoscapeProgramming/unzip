const fs = require('fs');
const Unzip = require('adm-zip');

function unzip(file, path) {
    const zip = new Unzip(file)
    zip.getEntries().forEach(entry => {
        let filePath = path || "./"
        if (!filePath.startsWith("./")) {
            filePath = "./" + filePath
        }
        if (!filePath.endsWith("/")) {
            filePath = filePath + "/"
        }
        fs.appendFileSync(filePath + entry.entryName, entry.getData().toString('utf8'))
    })
}

module.exports = unzip
