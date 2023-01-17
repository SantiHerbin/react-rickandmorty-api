import React, { useState, useEffect } from 'react'
import Character from './character';
import styled from 'styled-components';

function NavPage(props) {
  return (
    <Header className='mt-2'>
        <header className='align-items-center d-flex justify-content-between'>
            <p>Page: {props.page}</p>
            <button className='btn btn-primary btn-sm'
                onClick={() => props.setPage(props.page + 1)}
            >
              Page {props.page + 1}
            </button>
        </header> 
    </Header>
        
  )
}

const Header = styled.header`
    p{
        color: #38598b;
    }
`

function characterList() {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1);

  useEffect(() => {
    async function callApi() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setCharacters(data.results)
    }

    callApi();
  }, [page]);

  return (
      <div className='container'>
        <NavPage page={page} setPage={setPage} />
        <div className="row mt-4">
          {characters.map((character) => {
              return (
                  <div className="col-md-3" key={character.id}>
                    <Character character={character} />
                  </div>
              )
          })}
        </div>
        <NavPage page={page} setPage={setPage} />
      </div>
  )
}

export default characterList
  