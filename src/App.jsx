import { useState, useEffect } from 'react'
//importo axios
import axios from 'axios'

function App() {
  const [actresses, setActresses] = useState([])

  //creo una funzione per la chiamata ajax con axios
  const fetchActresses = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => setActresses(response.data))

  }

  useEffect(() => {
    fetchActresses()
  }, [])




  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between'>
              <h1>Actresses list</h1>
            </div>
          </div>
          {actresses.map((actress) => (
            <div className="col-12 col-md-6 col-lg-4"
              key={`actresses-${actress.id}`}>
              <div className="card mb-4">
                <img src={actress.image} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{actress.name}</h5>
                  <p className="card-text">{actress.birth_year}</p>
                  <p className="card-text">{actress.nationality}</p>
                  <p className="card-text">{actress.biography}</p>
                  <p className="card-text">{actress.awards}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
