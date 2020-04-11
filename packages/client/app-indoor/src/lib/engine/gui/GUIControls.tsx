import React, { useEffect, useState } from 'react'
import { Paper, makeStyles, createStyles, Theme } from '@material-ui/core'
import { controls, controlsEmitter } from '.'
import { useSpring, animated, to } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { clamp } from './util'
import { ControlGroup } from './component/ControlGroup'

const WIDTH = 300
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    guiWrapper: {
      position: 'absolute',
      // top: '50%',
      // right: theme.spacing(6),
      right: 0,
      margin: theme.spacing(2),
      // transform: `translate(${theme.spacing(6)}px, -50%)`,
      // transform: `translate(0, -50%)`,
      // width: theme.spacing(30),
      width: WIDTH,
    },
    header: {
      height: theme.spacing(4),
      backgroundColor: theme.palette.primary.light,
      cursor: 'move',
      // cursor: 'grab',
    },
    content: {
      padding: `0 ${theme.spacing(1)}px`,
    },
  })
)

export const GUIControls = React.memo(() => {
  const classes = useStyles()
  const [{ pos }, setPos] = useSpring(() => ({ pos: [0, 0] }))

  const bind = useDrag(
    ({
      movement,
      memo = (pos as any).getValue
        ? (pos as any).getValue()
        : (pos as any).get(),
    }) => {
      setPos({
        pos: [
          clamp(movement[0] + memo[0], -window.innerWidth + WIDTH + 30, 1),
          clamp(movement[1] + memo[1], 0, window.innerHeight - 300),
        ],
      })
      return memo
    }
  )

  const groupByControls = (items: any): any => {
    return Array.from(items).reduce((acc: any, item: any) => {
      const groupName = item[1].config.group || 'DEFAULT_GROUP'
      acc[groupName] = acc[groupName] || []
      acc[groupName].push(item)

      return acc
    }, {})
  }

  const [, set] = useState<number>(0)

  useEffect(() => {
    controlsEmitter.update = () => {
      // 通过一个计算器触发状态更新，然后重新渲染页面
      set((n) => n + 1)
      return null
    }
  }, [])

  return (
    <animated.div
      className={classes.guiWrapper}
      style={{
        transform: to([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`),
      }}
    >
      <Paper>
        <div className={classes.header} {...bind()}></div>
        <div className={classes.content}>
          {Object.entries(groupByControls(controls)).map(
            ([groupName, items]: any) => (
              <ControlGroup
                key={groupName}
                title={groupName}
                controls={items}
              />
            )
          )}
        </div>
      </Paper>
    </animated.div>
  )
})
