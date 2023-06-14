import { SectionStyles } from './styles'
import  HeaderSection  from '../headerSection/HeaderSection'
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

    useEffect(() => {
        axios .get(`https://rickandmortyapi.com/api/character?page=${page}`).then((response) => {

        console.log(response)
            const array = [...characters, ...response.data.results]
            setCharacters(array)
            setCountPages(response.data.info.pages)
            setQtd(response.data.info.count)
        })
    }, [page])

    return (
        <SectionStyles>
        <div className='container'>
            < HeaderSection 
                qtd={qtd}
            />
            <div className="main">
                < Filter />
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
                handleMore={() => setPage(page + 1)}
                countPages={countPages}
                page={page}
            />
        </div>
        </SectionStyles>
    )
}