import React, {
  PropsWithChildren,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles, createStyles, Theme, Typography } from '@material-ui/core'
import useMeasure from 'react-use-measure'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      textAlign: 'left',
      zIndex: 99999,
    },
    title: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
      textTransform: 'uppercase',
    },
    content: {
      overflow: 'hidden',
      backgroundColor: theme.palette.primary.contrastText,
    },
    padding: {
      padding: `0 ${theme.spacing(2)}px`,
    },
    consoleCursor: {},
    consoleFocus: {},
    consoleNoFocus: {},
    consoleTextarea: {
      position: 'fixed',
      top: '0px',
      left: '-9999px',
    },
  })
)

export interface IProps {
  title?: string
}

export const Console = forwardRef((props: PropsWithChildren<IProps>, ref) => {
  const { title = 'Console' } = props

  const [isOpened, setIsOpened] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const consoleWrapper = useRef<HTMLDivElement>()
  const consoleTextarea = useRef<HTMLTextAreaElement>()

  const classes = useStyles()

  const [refContent, { height }] = useMeasure()

  const adjustedHeight = isOpened && height === 0 ? 'auto' : height

  useImperativeHandle(ref, () => ({
    onToggleClick() {
      setIsOpened((prev) => !prev)
    },
  }))

  const focus = () => {
    consoleTextarea.current?.dispatchEvent(new Event('blur'))
    setIsFocus(!isFocus)
  }
  const blur = () => setIsFocus(false)

  useEffect(() => {
    consoleWrapper.current?.addEventListener('click', focus)
    consoleTextarea.current?.addEventListener('blur', blur)
    return () => {
      consoleWrapper.current?.removeEventListener('click', focus)
      consoleTextarea.current?.removeEventListener('blur', blur)
    }
  }, [])

  const animProps = useSpring({
    height: isOpened ? adjustedHeight : 0,
    opacity: isOpened ? 1 : 0,
  })

  return (
    <div className={classes.wrapper}>
      <animated.div style={animProps} className={classes.content}>
        <div ref={refContent}>
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
          <div
            className={`${classes.padding} ${
              isFocus ? classes.consoleFocus : classes.consoleNoFocus
            }`}
            ref={consoleWrapper as any}
          >
            <textarea
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              ref={consoleTextarea as any}
              className={classes.consoleTextarea}
            />
            <Typography variant="body1">输入场景交互命令</Typography>
            <Typography variant="body2">
              <span>文本生成场景>&nbsp;</span>
              <span>
                generate a room with a door, a window and a chair
                <span>&nbsp;</span>{' '}
              </span>
            </Typography>
          </div>
        </div>
      </animated.div>
    </div>
  )
})
