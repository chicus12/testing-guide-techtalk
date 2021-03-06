/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'
import Tooltip from '@reach/tooltip'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useAsync } from 'react-async'
import * as techtalksClient from '../utils/techtalks-client'
import TechtalkRow from '../components/techtalk-row'
import { TechtalkListUL, Spinner } from '../components/lib'

function initialSearch() {
  return techtalksClient.search('')
}

function DiscoverTechtalkScreen() {
  const [query, setQuery] = React.useState('')
  const [hasSearched, setHasSearched] = React.useState()
  const { data, isPending, isRejected, isResolved, error, run } = useAsync({
    promiseFn: initialSearch,
    deferFn: techtalksClient.search,
  })

  const techtalks = data && data.data ? data.data : []

  function handleInputChange(e) {
    setQuery(e.target.value)
  }

  function handleSearchClick(e) {
    e.preventDefault()
    setHasSearched(true)
    run(query)
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSearchClick}>
          <input
            onChange={handleInputChange}
            placeholder="Buscar techtalks..."
            id="search"
            css={{ width: '100%' }}
          />
          <Tooltip label="Buscar techtalks">
            <label htmlFor="search">
              <button
                type="submit"
                css={{
                  border: '0',
                  position: 'relative',
                  marginLeft: '-35px',
                  background: 'transparent',
                }}
              >
                {isPending ? (
                  <Spinner />
                ) : isRejected ? (
                  <FaTimes aria-label="error" css={{ color: 'red' }} />
                ) : (
                  <FaSearch aria-label="search" />
                )}
              </button>
            </label>
          </Tooltip>
        </form>

        {isRejected ? (
          <div css={{ color: 'red' }}>
            <p>There was an error:</p>
            <pre>{error.message}</pre>
          </div>
        ) : null}
      </div>
      <div>
        {hasSearched ? null : (
          <div css={{ marginTop: 20, fontSize: '1.2em', textAlign: 'center' }}>
            <p>Bienvenido a la página de descubrimiento.</p>
            <p>
              Déjame mostrarte algunos techtalks que le pueden interesar ...
            </p>
            {isPending ? (
              <div css={{ width: '100%', margin: 'auto' }}>
                <Spinner />
              </div>
            ) : isResolved && techtalks.length ? (
              <p>
                ¡Aqui tienes! Podés encontrar los techtalks más fácil con la
                barra de búsqueda de arriba..
              </p>
            ) : isResolved && !techtalks.length ? (
              <p>Hmmm ... No pude encontrar ningún techtalk. Lo siento.</p>
            ) : null}
          </div>
        )}
        {isResolved ? (
          techtalks.length ? (
            <TechtalkListUL css={{ marginTop: 20 }}>
              {techtalks.map(book => (
                <li key={book.id}>
                  <TechtalkRow key={book.id} techtalk={book} />
                </li>
              ))}
            </TechtalkListUL>
          ) : hasSearched ? (
            <div
              css={{ marginTop: 20, fontSize: '1.2em', textAlign: 'center' }}
            >
              <p>Hmmm... can't find any techtalks</p>
              <p>Here, let me load a few techtalks for you...</p>
              {isPending ? (
                <div css={{ width: '100%', margin: 'auto' }}>
                  <Spinner />
                </div>
              ) : (
                <p>
                  Hmmm... I couldn't find any techtalks with the query "
{query}
                  ." Please try another.
                </p>
              )}
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  )
}

export default DiscoverTechtalkScreen
