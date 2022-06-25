import { ApolloProvider } from '@apollo/client';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo';
import './styles/global.css';//aplicou o tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>   {/* semelhante ao useContext. Passa os parametros configurados do client apollo para toda a aplicação */}
      <App />
    </ApolloProvider>


  </React.StrictMode>
)
