import { useState, useMemo } from 'react'
import { catalogData } from './data'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [viewMode, setViewMode] = useState('cards')

  const filteredData = useMemo(() => {
    return catalogData.map(category => ({
      ...category,
      items: category.items.filter(item => {
        const matchesSearch = searchTerm === '' ||
          item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.partNumber.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory = selectedCategory === null || selectedCategory === category.category

        return matchesSearch && matchesCategory
      })
    })).filter(category => category.items.length > 0)
  }, [searchTerm, selectedCategory])

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <h1>AUTO PEÇAS NUNEDIESEL</h1>
            <p>Catálogo Interativo - Motor Cummins 6BT</p>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="controls-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Buscar por código, descrição ou número de peça..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                className="clear-btn"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>

          <div className="view-controls">
            <button
              className={`view-btn ${viewMode === 'cards' ? 'active' : ''}`}
              onClick={() => setViewMode('cards')}
              title="Visualização em Cards"
            >
              ◻️ Cards
            </button>
            <button
              className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
              title="Visualização em Tabela"
            >
              📋 Tabela
            </button>
          </div>
        </div>

        <div className="filters-section">
          <div className="category-filter">
            <button
              className={`filter-tag ${selectedCategory === null ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              Todas as Categorias
            </button>
            {catalogData.map(cat => (
              <button
                key={cat.category}
                className={`filter-tag ${selectedCategory === cat.category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.category)}
              >
                {cat.icon} {cat.category}
              </button>
            ))}
          </div>
          <div className="result-count">
            {filteredData.reduce((acc, cat) => acc + cat.items.length, 0)} peça(s) encontrada(s)
          </div>
        </div>

        <div className="results-section">
          {filteredData.length === 0 ? (
            <div className="no-results">
              <p>❌ Nenhuma peça encontrada</p>
              <small>Tente ajustar seus filtros</small>
            </div>
          ) : (
            filteredData.map(category => (
              <section key={category.category} className="category-section">
                <h2 className="category-title">
                  <span className="icon">{category.icon}</span>
                  {category.category}
                </h2>

                {viewMode === 'cards' ? (
                  <div className="items-grid">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="item-card">
                        <div className="card-header">
                          <code className="code-badge">{item.code}</code>
                          {item.note && <span className="note-badge">⚠️ {item.note}</span>}
                        </div>
                        <div className="card-body">
                          <p className="description">{item.description}</p>
                          {item.partNumber && (
                            <div className="part-info">
                              <small>Nº Peça:</small>
                              <strong>{item.partNumber}</strong>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="items-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Código</th>
                          <th>Descrição</th>
                          <th>Nº da Peça</th>
                          <th>Observações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, idx) => (
                          <tr key={idx}>
                            <td className="code-cell"><code>{item.code}</code></td>
                            <td>{item.description}</td>
                            <td>{item.partNumber}</td>
                            <td>{item.note || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))
          )}
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Auto Peças Nunediesel - Catálogo Motor Cummins 6BT</p>
      </footer>
    </div>
  )
}

export default App
