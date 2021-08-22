import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {fonts} from '../../styles'

export default function LogoComponent() {
  return (
    <Logo>
      <Link to="/">
        <h1><span>AND</span>Health</h1>
      </Link>
    </Logo>
  )
}
const Logo = styled.div`
  display; flex;
  align-items: center;

  h1{
    font-size: 3.2rem;
    color: var(--color-primary);
    font-family: ${fonts.heading};
    font-weight: 600;

    span{
      background-color: var(--color-primary);
      padding: 0 6px;
      color: white;
      letter-spacing: .15rem;
      font-weight: 800;
      margin-right: 3px;
    }
  }
`