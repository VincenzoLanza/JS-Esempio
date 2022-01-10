const axios=require("axios")
const main = async () => {
    const lista = await axios.get("https://jsonplaceholder.typicode.com/todos")
    const todos = lista.data
  for (let elem of todos) { 
    const ris = todos.filter(Stringa)
    }
    console.log(todos[0])
}
main()
//console.log(ris.data) stampa della lista 
