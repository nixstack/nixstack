import React, { useState, useCallback } from 'react'
import { SearchResultItem } from './SearchResultItem'
import { makeStyles, createStyles } from '@material-ui/core'
import Model from '../../core/Model'

const gridGap = '10px'
const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      position: 'relative',
    },
    list: {
      padding: '0 10px 0',
      margin: '0 auto',
      overflow: 'hidden',
      listStyleType: 'none',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: gridGap,
      gridRowGap: gridGap,
      // width: '600px',
      minHeight: '400px',
      maxHeight: 'calc(90vh - 250px)',
      overflowY: 'auto',
    },
  })
)

export interface IProps {
  items: any[]
  onUpdate: (model: Model) => void
}

export const SearchResult = (props: IProps) => {
  const classes = useStyles()
  const [active, set] = useState<number | null>(null)
  const setActive = useCallback((index: number) => {
    set((prev) => (prev === index ? null : index))
  }, [])
  const renderItems = () =>
    props.items.map((item, index) => (
      <SearchResultItem
        title={item.name}
        url={`/files/image/${item.uuid}.png`}
        key={index}
        index={index}
        active={active === index}
        onClick={setActive}
        uuid={item.uuid}
        onUpdate={props.onUpdate}
      />
    ))
  return (
    <div className={classes.wrapper}>
      <ul className={`${classes.list} custom-scroll`}>{renderItems()}</ul>
    </div>
  )
}
