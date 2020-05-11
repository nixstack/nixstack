import React, { useEffect, useReducer } from 'react'
import { View2DComp } from './component/view2d/View2DComp'
import { View3DComp } from './component/view3d/View3DComp'
import Button from '@material-ui/core/Button/Button'
import GestureIcon from '@material-ui/icons/Gesture'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Axios from 'axios'
import { Context } from './Context'
import { Floorplan } from './model/Floorplan'

const useStyles = makeStyles(() =>
  createStyles({
    viewTypeBtn: {
      position: 'absolute',
      margin: '0 auto',
      width: '100%',
      textAlign: 'center',
      bottom: '10px',
      zIndex: 100,
    },
  })
)

export const DesignEngine = React.memo(() => {
  // const [viewType, setViewType] = useState(2)

  const initState = {
    viewType: 2,
    floorplan: new Floorplan(),
  }

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'setViewType':
        return Object.assign({}, state, { viewType: action.payload.viewType })
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initState)

  const classes = useStyles()

  const floorplan = state.floorplan as Floorplan

  async function loadSerialized(url: string = '/files/json/floorplan.json') {
    try {
      const result = await Axios.get(url)
      const data = result.data
      floorplan.loadFloorplan(data.floorplan)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadSerialized()
  }, [])
  return (
    <Context.Provider value={{ state, dispatch } as any}>
      <View2DComp />
      <View3DComp />
      <div className={classes.viewTypeBtn}>
        <Button
          variant="contained"
          onClick={() =>
            dispatch({ type: 'setViewType', payload: { viewType: 2 } })
          }
        >
          <GestureIcon />
        </Button>
        &nbsp;
        <Button
          variant="contained"
          onClick={() =>
            dispatch({ type: 'setViewType', payload: { viewType: 3 } })
          }
        >
          <ThreeDRotationIcon />
        </Button>
      </div>
    </Context.Provider>
  )
})
