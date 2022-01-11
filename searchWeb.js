
const main = async(par) => {
  const lista = await fetch("https://jsonplaceholder.typicode.com/todos")
  const testo = await lista.json()
  const todos = testo
  var stringhe = []
  todos.forEach(el => stringhe.push(el.title))
  const FiltraLinee = (arr,stringa2) => { 
    return arr.filter(el => {
      return el.indexOf(stringa2) !== -1
      })
  }
  return FiltraLinee(stringhe,par)
}
async function myFunction () {
  var x = document.getElementById("input").value;
  const ris = await main(x)
  console.log(ris)
  document.getElementById("paragrafo").innerHTML = ris.map((titolo) => titolo+"<br>") 
}