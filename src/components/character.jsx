import React from 'react'
import styled from 'styled-components';

export default function character({character}) {
  return (
      <Container>
        <div className='person-container text-center p-3' key={character.id}>
                    <h3>{character.name}</h3>
                    <img className='img-fluid rounded-pill' src={character.image} alt={character.name} />
        </div>
      </Container>  
  )
}

const Container = styled.div`
    background-color: #e7eaf6;
    margin-bottom: 20px;
    border-radius: 5%;
    h3{
      color: #38598b;
    }
`
