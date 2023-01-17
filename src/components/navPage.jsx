import React from 'react'
import styled from 'styled-components';

export default function navPage(props) {
  return (
    <Header className='mt-2'>
        <header className='align-items-center d-flex justify-content-between'>
            <p>Page: {props.page}</p>
            <button className='btn btn-primary btn-sm'
                onClick={() => setPage(1)}
            >
              Page 2
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
