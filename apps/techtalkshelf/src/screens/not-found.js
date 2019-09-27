/** @jsx jsx */
import { jsx } from '@emotion/core'

import { Link } from '@reach/router'

function NotFound() {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Disculpa... no hay nada aquí.
        <Link to="/">Ir al Inicio</Link>
      </div>
    </div>
  )
}

export default NotFound
