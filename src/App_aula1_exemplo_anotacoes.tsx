import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
query{
  lessons{
    id
    title
  }
}
`

interface Lesson {
  id: string,
  title: string
}

const AppAula1 = () => {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY) //-> responsavel pelas requisições no graphQL; É necessário configurar o ApolloProvider no nodo mais alto, neste caso o main.tsx
  console.log(data)
  //definindo o tipo no useQuery não precisa fazer isso no map; Neste caso o retorno é um objeto com arrays, como pode ser entendido na especificação do tipo no useQuery.
  return (
    <div>
      <h1 className="text-5xl font-bold text-violet-400">Hello</h1>
      <ul>
        {/* o uso de ?, faz com que o map seja executando quando o data tiver conteúdo. */}
        {data?.lessons.map(lessons => {
          return <li key={lessons.id}>{lessons.title}</li>
        })}
      </ul>
    </div>
  )
}

export default AppAula1
