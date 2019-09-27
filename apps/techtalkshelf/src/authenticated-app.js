/** @jsx jsx */
import { jsx } from '@emotion/core'

import styled from '@emotion/styled'
import { Router, Link, Redirect } from '@reach/router'
import * as mq from './styles/media-queries'
import * as colors from './styles/colors'
import { ListItemProvider } from './context/list-item-context'
import { useAuth } from './context/auth-context'
import { useUser } from './context/user-context'
import ReadingListScreen from './screens/list'
// import FinishedBooksScreen from './screens/finished'
import DiscoverTechtalksScreen from './screens/discover'
import TechtalkScreen from './screens/techtalk'
import NotFound from './screens/not-found'

function AuthenticatedApp() {
  const user = useUser()
  const { logout } = useAuth()
  return (
    <div
      css={{
        margin: '0 auto',
        padding: '2em 0',
        maxWidth: '840px',
        width: '100%',
        display: 'grid',
        gridGap: '1em',
        gridTemplateColumns: '3fr 9fr',
        [mq.small]: {
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'auto',
          width: '100%',
          padding: '2em 1em',
        },
      }}
    >
      <div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          {user.name}
          <button
            onClick={logout}
            css={{
              marginLeft: '10px',
            }}
            type="button"
          >
            Salir
          </button>
        </div>
        <Nav />
      </div>
      <main css={{ width: '100%' }}>
        <Routes />
      </main>
      <footer />
    </div>
  )
}

const NavLink = styled(Link)({
  display: 'block',
  padding: '8px 15px 8px 10px',
  margin: '5px 0',
  width: '100%',
  height: '100%',
  color: colors.text,
  borderRadius: '2px',
  borderLeft: '5px solid transparent',
  ':hover': {
    color: colors.indigo,
    textDecoration: 'none',
    background: colors.gray10,
  },
})

function Nav() {
  return (
    <nav
      css={{
        position: 'sticky',
        top: '2em',
        padding: '3em 1.5em',
        border: `1px solid ${colors.gray10}`,
        borderRadius: '3px',
        [mq.small]: {
          padding: '0.5em 1em',
          position: 'static',
        },
      }}
    >
      <ul
        css={{
          listStyle: 'none',
          padding: '0',
          '& [aria-current="page"]': {
            borderLeft: `5px solid ${colors.indigo}`,
            background: colors.gray10,
            ':hover': {
              background: colors.gray10,
            },
          },
        }}
      >
        <li>
          <NavLink to="/list">Techtalks por ver</NavLink>
        </li>
        <li>
          <NavLink to="/finished">Techtalks vistos</NavLink>
        </li>
        <li>
          <NavLink to="/finished">Techtalks creados por mí</NavLink>
        </li>
        <li>
          <NavLink to="/discover">Descubrir</NavLink>
        </li>
      </ul>
    </nav>
  )
}

function RedirectHome() {
  return <Redirect to="/list" />
}

function Routes() {
  return (
    <ListItemProvider>
      <Router>
        <RedirectHome path="/" />
        <ReadingListScreen path="/list" />
        {/* <FinishedBooksScreen path="/finished" />
         */}
        <TechtalkScreen path="/techtalk/:techtalkId" />
        <DiscoverTechtalksScreen path="/discover" />
        <NotFound default />
      </Router>
    </ListItemProvider>
  )
}

export default AuthenticatedApp
