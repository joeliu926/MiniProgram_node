var fs=require('fs');
function readJSON(path) {
    if (fs.existsSync(path)) {
        return JSON.parse(fs.readFileSync(path));
    }else {
        return {};
    }
}
function writeJSON(path,jsonstr) {
    if (fs.existsSync(path)) {
        fs.writeFileSync(path,jsonstr);
    } else {
        console.log(path+ " Not Found!");
    }
}


module.exports = {
    readJSON:readJSON,
    writeJSON:writeJSON
};