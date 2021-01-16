import './styles/global.css'
import Header from './components/Header'
import Search from './components/Search'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <footer>
        <div>Todos os direitos reservados a <a href="https://calindra.tech/">Calindra</a>.</div>
       <div>Desenvolvido por <a href="https://github.com/RenatoSTV">Renato ST</a>.</div>
      </footer>
    </div>
  );
}

export default App;
