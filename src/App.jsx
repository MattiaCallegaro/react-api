import { useState, useEffect } from 'react'
//importo axios
import axios from 'axios'

function App() {
  const [actresses, setActresses] = useState([])

  //creo una funzione per la chiamata ajax con axios
  const fetchActresses = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => console.log(response.data))

  }

  useEffect(fetchActresses);




  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between'>
              <h1>Actresses list</h1>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
