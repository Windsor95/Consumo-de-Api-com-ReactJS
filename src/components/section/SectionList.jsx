import { SectionStyles } from './styles'
import  HeaderSection  from '../headerSection/HeaderSection'
import  ErrorApi  from '../error/Error'
import  Filter  from '../filter/Filter'
import  Cards  from '../cards/Cards'
import  FooterSection  from '../footerSection/FooterSection'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function SectionList() {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [countPages, setCountPages] = useState(0)
    const [qtd, setQtd] = useState(0)
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')


    function clearSearch() {
        page != 1 ? setPage(1) : null
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`).then((response) => {

            const array = [...response.data.results]
            setCharacters(array)
            setCountPages(response.data.info.pages)
            setQtd(response.data.info.count)
  
        }).catch((error) => {
          console.error('Error fetching data:', error)
        })
    }, [page, search, status, species, gender])

    return (
        <SectionStyles>

        < ErrorApi />

        <div className='container'>
            < HeaderSection 
                qtd={qtd}
                setSearch={setSearch} 
            />
            <div className="main">
                < Filter
                setStatus={setStatus}
                setSpecies={setSpecies}
                setGender={setGender}
                />
                <div className="cardsList">
                {characters && characters.map(({ id, image, name, status, gender, species }) => {
                  return (
                    <Cards
                      key={id}
                      image={image}
                       name={name}
                      status={status}
                      gender={gender}
                      species={species}
                    />
                  );
                })}
              </div>
            </div>
            < FooterSection 
                handleNext={() => setPage(page + 1)}
                handlePrev={() => setPage(page - 1)} 
                countPages={countPages}
                page={page}
                clearSearch={clearSearch}
            />
        </div>
        </SectionStyles>
    )
}