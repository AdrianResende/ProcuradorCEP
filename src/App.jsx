import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import './styles.css'
import api from './services/api'

function App() {
  //hooks para guardar oque esta dentro do input e do cep 
  const [input,setInput] = useState('')
  const [cep,setCep] = useState('')


   async function handleSearch(){
    if(input === ''){
      alert('Preencha algum CEP')
      return;
    }
    try {
      //caso de certo entre aqui
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    }
    catch{
      //caso de erro entre aqui
      alert('CEP não encontrado')
      setInput("")
    }
  }
  
  return (
    
    
    <div className='container'>
      <h1 className='title'>Buscador de cep</h1>
      
      <div className='containerInput'>
        <input type="text" 
        placeholder='Buscador de cep...'
        value={input}
        //um evento que vai pegar o valor que esta dentro do input e mandar pro useState
        onChange={(e) => setInput(e.target.value)}
        />
      
        <button className='buttonSearch'
        //no clique le vai passar uma funçao que vai buscar na API os dados
        onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>
      
      {//se o cep for < q 0 ele nao avança
      Object.keys(cep).length > 0 && (
      <main className='main'>
        <h2>CEP : {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}</span>

      </main>)}
      
      
    </div>
  )
}

export default App
