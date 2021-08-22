import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Logo from './logo'
import { ButtonPrimary} from '../../styles'


export default function NavigationComponent() {
  return (
    <Navigation>
        <Container>

          <Logo/>

          <Link style={{margin: "0 0 0 auto"}} to='/support'>
            <ButtonPrimary>Get Support</ButtonPrimary>
          </Link>

        </Container>
    </Navigation>
  )
}

const Navigation = styled.nav`
  width: 100%;
  background-color: white;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: .9rem 1.4rem;
`

