/** @jsx jsx */
import { jsx } from '@emotion/core'

import { Link } from '@reach/router'
import * as mq from '../styles/media-queries'
import * as colors from '../styles/colors'
import { useSingleListItemState } from '../context/list-item-context'
import StatusButtons from './status-buttons'
import Rating from './rating'

function TechtalkRow({ techtalk }) {
  const { title, author, coverImageUri } = techtalk
  const listItem = useSingleListItemState({
    bookId: techtalk.id,
  })

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
      }}
    >
      <Link
        to={`/techtalk/${techtalk.id}`}
        css={{
          flexGrow: 2,
          display: 'grid',
          gridTemplateColumns: '140px 1fr',
          gridGap: 20,
          border: `1px solid ${colors.gray20}`,
          color: colors.text,
          padding: '1.25em',
          borderRadius: '3px',
          ':hover,:focus': {
            textDecoration: 'none',
            boxShadow: '0 5px 15px -5px rgba(0,0,0,.08)',
            color: 'inherit',
          },
        }}
      >
        <div
          css={{
            width: 140,
            [mq.small]: {
              width: 100,
            },
          }}
        >
          <img
            src={coverImageUri}
            alt={`${title} book cover`}
            css={{ maxWidth: '100%' }}
          />
        </div>
        <div css={{ flex: 1 }}>
          <div css={{ display: 'flex', justifyContent: 'space-between' }}>
            <div css={{ flex: 1 }}>
              <h2
                css={{
                  fontSize: '1.25em',
                  margin: '0',
                  color: colors.indigo,
                }}
              >
                {title}
              </h2>
              {listItem ? <Rating listItem={listItem} /> : null}
            </div>
            <div css={{ marginLeft: 10 }}>
              <div
                css={{
                  marginTop: '0.4em',
                  fontStyle: 'italic',
                  fontSize: '0.85em',
                }}
              >
                {author}
              </div>
              <small>{techtalk.publisher}</small>
            </div>
          </div>
          <small>
            {techtalk.description.substring(0, 500)}
            ...
          </small>
        </div>
      </Link>
      <div
        css={{
          marginLeft: '20px',
          position: 'absolute',
          color: colors.gray80,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100%',
        }}
      >
        <StatusButtons book={techtalk} />
      </div>
    </div>
  )
}

export default TechtalkRow
