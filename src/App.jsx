import { FiSearch, FiMapPin, FiHome, FiNavigation } from 'react-icons/fi'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles.css'
import api from './services/api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSearch() {
    if (input === '') {
      setError('Por favor, digite um CEP')
      setTimeout(() => setError(''), 3000)
      return
    }

    if (input.length < 8) {
      setError('CEP deve ter 8 dígitos')
      setTimeout(() => setError(''), 3000)
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const response = await api.get(`${input}/json`)
      
      if (response.data.erro) {
        throw new Error('CEP não encontrado')
      }
      
      setCep(response.data)
      setInput('')
    } catch (err) {
      setError('CEP não encontrado. Verifique e tente novamente.')
      setTimeout(() => setError(''), 3000)
      setCep({})
    } finally {
      setLoading(false)
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  function formatCep(value) {
    const numericValue = value.replace(/\D/g, '')
    if (numericValue.length <= 8) {
      return numericValue.replace(/(\d{5})(\d{3})/, '$1-$2')
    }
    return value
  }

  function handleInputChange(e) {
    const formatted = formatCep(e.target.value)
    setInput(formatted)
    if (error) setError('')
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const resultVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -30,
      transition: { 
        duration: 0.3
      }
    }
  }

  const errorVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.div 
      className='container'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className='title'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Procurador CEP
      </motion.h1>
      
      <motion.div 
        className='containerInput'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <input 
          type="text" 
          placeholder='Digite o CEP (ex: 12345-678)'
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          maxLength={9}
          disabled={loading}
        />
      
        <motion.button 
          className='buttonSearch'
          onClick={handleSearch}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? (
            <div className="loading"></div>
          ) : (
            <FiSearch size={22} color='#FFF'/>
          )}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.div
            className="error-message"
            variants={errorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              color: '#ff6b6b',
              fontSize: '16px',
              fontWeight: '500',
              textAlign: 'center',
              marginTop: '10px',
              padding: '10px 20px',
              background: 'rgba(255, 107, 107, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 107, 107, 0.2)'
            }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {Object.keys(cep).length > 0 && (
          <motion.main 
            className='main'
            variants={resultVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiMapPin style={{ marginRight: '10px', verticalAlign: 'middle' }} />
              CEP: {cep.cep}
            </motion.h2>
            
            <div className="info-grid">
              {cep.logradouro && (
                <motion.div 
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="info-label">
                    <FiHome style={{ marginRight: '5px' }} />
                    Logradouro
                  </div>
                  <div className="info-value">{cep.logradouro}</div>
                </motion.div>
              )}
              
              {cep.bairro && (
                <motion.div 
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="info-label">
                    <FiNavigation style={{ marginRight: '5px' }} />
                    Bairro
                  </div>
                  <div className="info-value">{cep.bairro}</div>
                </motion.div>
              )}
              
              {cep.localidade && (
                <motion.div 
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="info-label">Cidade</div>
                  <div className="info-value">{cep.localidade}</div>
                </motion.div>
              )}
              
              {cep.uf && (
                <motion.div 
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="info-label">Estado</div>
                  <div className="info-value">{cep.uf}</div>
                </motion.div>
              )}
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default App
