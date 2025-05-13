import { useState, useEffect } from 'react'
//importo axios
import axios from 'axios'

function App() {
  //bonus 2 creo una nuova variabile di stato+
  const [people, setPeople] = useState([])

  //creo una funzione per la chiamata ajax con axios
  const fetchPeople = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {
        const actresses = response.data

        axios
          .get("https://lanciweb.github.io/demo/api/actors/")
          .then((response) => {
            const actors = response.data
            setPeople([...actresses, ...actors])
          })

      })

  }

  useEffect(() => {
    fetchPeople()
  }, [])



  return (
    <>

      <div className="bg-light min-vh-100">
        <div className="container mt-4 ">
          <div className="row ">
            <div className="col-12">
              <div className='d-flex justify-content-between'>
                <h1>Actresses list</h1>
              </div>
            </div>
            {people.map((person) => (
              <div className=" mb-4 col-12 col-md-6 col-lg-4"
                key={`person-${person.id}`}>
                <div className="card  h-100 mt-4">
                  <img src={person.image} alt="" className="card-img-top" />
                  <div className="card-body ">
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">{person.birth_year}</p>
                    <p className="card-text">{person.nationality}</p>
                    <p className="card-text">{person.biography}</p>
                    <p className="card-text">{person.awards}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>



      {/* <div className="bg-light min-vh-100">
        <div className="container mt-4 ">
          <div className="row ">
            <div className="col-12">
              <div className='d-flex justify-content-between'>
                <h1>Actors list</h1>
              </div>
            </div>
            {actors.map((actor) => (
              <div className=" mb-4 col-12 col-md-6 col-lg-4"
                key={`actors-${actor.id}`}>
                <div className="card  h-100 mt-4">
                  <img src={actor.image} alt="" className="card-img-top" />
                  <div className="card-body ">
                    <h5 className="card-title">{actor.name}</h5>
                    <p className="card-text">{actor.birth_year}</p>
                    <p className="card-text">{actor.nationality}</p>
                    <p className="card-text">{actor.biography}</p>
                    <p className="card-text">{actor.awards}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App
