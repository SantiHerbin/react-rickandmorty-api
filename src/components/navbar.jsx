import React from 'react'
import styled from 'styled-components';
import rick from '../assets/iconrick.svg'

export default function navbar() {
  return (
    <NavContainer>
      <h2>Rick and morty</h2>
      <div className="svg">
        <a href="/"><img src={rick} alt="rick" /></a>
      </div>
      <div> 
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  h2{
    font-size: 25px;
    font-weight: bold;
    margin-right: 20px;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  font-size: small;
  font-family: 'Montserrat', sans-serif;
  background-color: #e7eaf6;
  color: #38598b;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  a{
    color: #38598b;
    text-decoration: none;
    margin: 5px;
  }
`