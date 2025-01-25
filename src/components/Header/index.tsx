import React from 'react'
import { Provider } from 'react-redux'
import { store, RootState } from './store'
import Header from './components/Header'
import Produtos from './components/Produtos'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export type { RootState }

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
