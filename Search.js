const axios=require("axios")
const main = async () => {
  const query = process.argv.slice(2);
  const lista = await axios.get("https://jsonplaceholder.typicode.com/todos")
  const todos = lista.data
  const todoValidi = todos.map((t) => t.title).filter((t) => (query.some((qElem)=>t.includes(qElem))))
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
