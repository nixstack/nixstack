import React, { useState, useEffect } from 'react'
import { View2DComp } from './component/view2d/View2DComp'
import { View3DComp } from './component/view3d/View3DComp'
import Button from '@material-ui/core/Button/Button'
import GestureIcon from '@material-ui/icons/Gesture'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import { Floorplan } from './model/Floorplan'
import Axios from 'axios'

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

  const classes = useStyles()

  let floorplan = new Floorplan()

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
    <>
      <View2DComp isVisible={viewType === 2} floorplan={floorplan} />
      <View3DComp isVisible={viewType === 3} floorplan={floorplan} />
      <div className={classes.viewTypeBtn}>
        <Button variant="contained" onClick={() => setViewType(2)}>
          <GestureIcon />
        </Button>
        &nbsp;
        <Button variant="contained" onClick={() => setViewType(3)}>
          <ThreeDRotationIcon />
        </Button>
      </div>
    </>
  )
})
