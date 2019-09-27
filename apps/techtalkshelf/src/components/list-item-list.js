/** @jsx jsx */
import { jsx } from '@emotion/core'

import { useListItemState } from '../context/list-item-context'
import { TechtalkListUL } from './lib'
import BookRow from './techtalk-row'

function ListItemList({ filterListItems, noListItems, noFilteredListItems }) {
  const listItems = useListItemState()
  const filteredListItems = listItems.filter(filterListItems)

  if (!listItems.length) {
    return (
      <div css={{ marginTop: '1em', fontSize: '1.2em' }}>{noListItems}</div>
    )
  }
  if (!filteredListItems.length) {
    return (
      <div css={{ marginTop: '1em', fontSize: '1.2em' }}>
        {noFilteredListItems}
      </div>
    )
  }

  return (
    <div css={{ marginTop: '1em' }}>
      <TechtalkListUL>
        {filteredListItems.map(listItem => (
          <li key={listItem.id}>
            <BookRow book={listItem.book} />
          </li>
        ))}
      </TechtalkListUL>
    </div>
  )
}

export default ListItemList
