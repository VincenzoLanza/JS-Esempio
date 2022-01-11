const axios=require("axios")
const main = async () => {
  const query = "et"
  const lista = await axios.get("https://jsonplaceholder.typicode.com/todos")
  const todos = lista.data
  const todoValidi = todos.map((t) => t.title).filter((t) => t.includes(query))
  console.log(todoValidi);
  // var stringhe = []
  // todos.forEach(el => stringhe.push(el.title))
  //   const FiltraLinee = (arr,stringa2) => { 
  //     return arr.filter(el => {
  //       return el.indexOf(stringa2) !== -1
  //       })
  //   }
  // console.log(FiltraLinee(stringhe, query))
}
main()
