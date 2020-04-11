import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import useIntersetionObserver from '../../hook/useIntersetionObserver'
import AssetManager from '../../core/AssetManager'
import Model from '../../core/Model'

const transformOffset = '100'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      width: '100%',
      position: 'relative',
      paddingBottom: '100%',

      animationDuration: '0.8s',
      animationTimingFunction: 'ease-in-out',

      '&:nth-child(2n).enter': {
        animationName: '$SlideFromRight',
      },

      '&:nth-child(2n).leave': {
        opacity: 0,
        transform: transformOffset,
      },

      '&:nth-child(2n + 1).enter': {
        animationName: '$SlideFromLeft',
      },

      '&:nth-child(2n + 1).leave': {
        opacity: 0,
        transform: `${-transformOffset}px`,
      },

      // '&.active': {
      //   backgroundColor: 'hsla(0, 88%, 70%, 1)',
      // },
      '&.active': {
        backgroundColor: 'rgba(182, 169, 176, 0.5)',
      },
      '&:hover': {
        backgroundColor: 'rgba(182, 169, 176, 0.5)',
      },
    },
    itemImage: {
      position: 'absolute',
      width: '100%',
      height: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      // '$item$active &': {
      //   backgroundColor: 'hsla(0, 88%, 70%, 1)',
      // },
      // '$item:not($active) &:hover, $item:not($active) &:focus, $item:not($active) &:active': {
      //   backgroundColor: 'hsla(0, 88%, 70%, 1)',
      // },
      // '$item:not($active) &:focus': {
      //   position: 'fixed',
      // },
    },

    active: {},

    '@keyframes SlideFromRight': {
      from: {
        transform: `translateX(${transformOffset}px)`,
        opacity: 0,
      },

      to: {
        transform: 'translateX(0)',
        opacity: 1,
      },
    },

    '@keyframes SlideFromLeft': {
      from: {
        transform: `translateX(${-transformOffset}px)`,
        opacity: 0,
      },

      to: {
        transform: 'translateX(0)',
        opacity: 1,
      },
    },
  })
)

export interface IProps {
  title: string
  url: string
  active: boolean
  index: number
  uuid: string
  onClick: (index: number) => void
  onUpdate: (model: Model) => void
}

export const SearchResultItem = (props: IProps) => {
  const classes = useStyles()

  const [isIntersection, ref] = useIntersetionObserver<HTMLLIElement>()

  const clickHandler = () => {
    props.onClick(props.index)
    AssetManager.getInstance().getModel(props.uuid, (model: any) => {
      props.onUpdate(model)
    })
  }

  return (
    <li
      ref={ref}
      className={`${classes.item} ${isIntersection ? 'enter' : 'leave'} ${
        props.active ? 'active' : ''
      }`}
      onClick={() => clickHandler()}
    >
      <div>{props.title}</div>
      <img src={props.url} className={classes.itemImage}></img>
    </li>
  )
}
