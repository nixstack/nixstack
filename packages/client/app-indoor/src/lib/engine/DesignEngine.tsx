import React, { useState, useEffect, useContext } from 'react'
import { View2DComp } from './component/view2d/View2DComp'
import { View3DComp } from './component/view3d/View3DComp'
import Button from '@material-ui/core/Button/Button'
import GestureIcon from '@material-ui/icons/Gesture'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import Axios from 'axios'
import { Context } from './Context'

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
  const [viewType, setViewType] = useState(2)

  const context = useContext(Context)

  const classes = useStyles()

  const floorplan = context.floorplan

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
    <Context.Provider value={context}>
      <View2DComp isVisible={viewType === 2} />
      <View3DComp isVisible={viewType === 3} />
      <div className={classes.viewTypeBtn}>
        <Button variant="contained" onClick={() => setViewType(2)}>
          <GestureIcon />
        </Button>
        &nbsp;
        <Button variant="contained" onClick={() => setViewType(3)}>
          <ThreeDRotationIcon />
        </Button>
      </div>
    </Context.Provider>
  )
})
