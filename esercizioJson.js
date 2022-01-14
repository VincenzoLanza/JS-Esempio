var fs=require("fs")
const file_json=require('./names.json');
const righe=file_json
var output=[]
var object = {
    output: []
}
function reverse(s){
    return s.split("").reverse().join("")
}
righe.forEach(riga => {if (riga.nome==reverse(riga.nome)) object.output.push(riga.nome)})
json=JSON.stringify(object)
fs.writeFile("palindromi.json",json,"utf-8",function(err) {if (err) {throw err} })
