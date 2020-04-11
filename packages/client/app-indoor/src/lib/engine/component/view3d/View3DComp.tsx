import React, { useState, useEffect, useContext, useCallback } from 'react'
// import { Canvas } from 'react-three-fiber'
// import { Box } from '../box/Box'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { Sky } from 'three/examples/jsm/objects/Sky'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
// import { makeStyles } from '@material-ui/core/styles'
import { createStyles, Theme, fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import CloudUpload from '@material-ui/icons/CloudUpload'
import HelpIcon from '@material-ui/icons/Help'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
// import TreeView from '@material-ui/lab/TreeView'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight'
// import TreeItem from '@material-ui/lab/TreeItem'
import { SearchUtil } from 'src/lib/util/SearchUtil'
// import { List, ListItem, Card, CardMedia, CardHeader } from '@material-ui/core'
import Floor from '../../model/Floor'
import Edge from '../../model/Edge'
import { Context } from '../../Context'
import Room from '../../model/Room'
import HalfEdge from '../../model/HalfEdge'
import { SearchResult } from './SearchResult'
import Model from '../../core/Model'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface IProps {
  // isVisible?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: (state: any) => {
        return state.viewType === 3 ? 'block' : 'none'
      },
    },
    canvas: {
      // position: 'fixed',
      display: 'flex',
    },
    leftBtnGrp: {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    searchPanel: {
      position: 'absolute',
      top: '50%',
      transform: `translate(${theme.spacing(6)}px, -50%)`,
      margin: theme.spacing(4),
      width: theme.spacing(50),
      // height: theme.spacing(80),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.primary.light, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      // pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchResult: {
      height: theme.spacing(80),
      overflow: 'auto',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    treeRoot: {
      // height: 240,
      // flexGrow: 1,
      // maxWidth: 400,
      textAlign: 'left',
    },
    searchResultMedia: {
      height: 0,
      paddingTop: '100%', // 16:9
    },
    searchResultRoot: {
      width: '100%',
    },
  })
)

export const View3DComp = (props: IProps) => {
  let renderer!: THREE.WebGLRenderer
  let camera!: THREE.PerspectiveCamera
  let scene!: THREE.Scene
  let sky!: Sky
  let orbitControls!: OrbitControls
  let transformControl!: TransformControls
  let refRoot = React.createRef<HTMLDivElement>()
  let ref = React.createRef<HTMLDivElement>()

  // let building!: THREE.Mesh
  // let wallMaterial!: THREE.Material
  // let win!: THREE.Mesh

  // let raycaster = new THREE.Raycaster()

  // let intersects!: any
  // let normalMatrix = new THREE.Matrix3()
  // let worldNormal = new THREE.Vector3()
  // let lookAtVector = new THREE.Vector3()
  // let dragging = false

  let floors: Floor[] = []
  let edges: Edge[] = []
  let objects: any[] = []

  renderer = new THREE.WebGLRenderer()
  // camera = new THREE.PerspectiveCamera()
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  )
  // camera.position.z = 15
  camera.position.set(-500, 1000, 2000)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  // const context = useContext(Context)
  // let floorplan = context.floorplan

  const { state } = useContext(Context as any)
  let floorplan = state.floorplan

  scene = new THREE.Scene()
  // const [scene] = useState(new THREE.Scene())

  renderer.setSize(window.innerWidth, window.innerHeight)

  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [searchResult, setSearchResult] = useState([])

  floorplan.on('UPDATED_EVENT', redraw)

  useEffect(() => {
    init()
    // init3D()

    return () => {
      // console.log(refRoot)
    }
  }, [])

  const classes = useStyles(state)

  // function addModel(model: Model) {
  //   console.log(scene)
  //   scene.add(model.gltf.scene)
  //   console.log(scene)
  //   console.log(model)
  //   setTimeout(() => {
  //     console.log(scene)
  //   }, 0)
  // }

  const addModel = useCallback((model: Model) => {
    scene.add(model.gltf.scene)
    objects.push(model.gltf.scene)
  }, [])

  // 目前只有两个门能正常加载，其他的从blender中导出模型数据有问题
  // new GLTFLoader().load(`/files/geometry/door_01.glb`, (gltf) => {
  //   scene.add(gltf.scene)
  // })

  return (
    <div className={classes.root} ref={refRoot}>
      <div className={classes.leftBtnGrp}>
        <ButtonGroup orientation="vertical" color="primary" variant="text">
          <Button onClick={() => setIsSearchVisible(!isSearchVisible)}>
            <SearchIcon />
          </Button>
          <Button>
            <CloudUpload />
          </Button>
          <Button>
            <HelpIcon />
          </Button>
        </ButtonGroup>
      </div>
      <Paper
        className={classes.searchPanel}
        elevation={3}
        style={{ display: isSearchVisible ? 'block' : 'none' }}
      >
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Button color="primary" variant="text" onClick={search}>
              <SearchIcon />
            </Button>
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        {/* <List className={classes.searchResult}>
          {searchResult.map((item: any) => {
            return (
              <ListItem id={item.id} key={item.id}>
                <Card className={classes.searchResultRoot}>
                  <CardHeader title={item.name} />
                  <CardMedia
                    className={classes.searchResultMedia}
                    image={`/files/image/${item.uuid}.png`}
                    title={item.name}
                  />
                </Card>
              </ListItem>
            )
          })}
        </List> */}
        <SearchResult items={searchResult} onUpdate={addModel} />
      </Paper>
      <div className={classes.canvas} ref={ref}></div>
    </div>
  )
  function init() {
    ref.current?.appendChild(renderer.domElement)

    initSky()
    initLight()
    initHelper()
    initControls()
    // initMesh()
    initEvent()
    // 动画循环渲染
    renderer.setAnimationLoop(() => {
      orbitControls.update()
      threeRender()
    })
  }

  function threeRender() {
    renderer.render(scene, camera)
  }

  function initControls() {
    // controls
    orbitControls = new OrbitControls(camera, ref.current as any)
    orbitControls.enableDamping = true
    orbitControls.dampingFactor = 0.05

    orbitControls.screenSpacePanning = false

    // orbitControls.minDistance = 100
    // orbitControls.maxDistance = 500

    orbitControls.maxPolarAngle = Math.PI / 2

    orbitControls.addEventListener('change', threeRender)

    orbitControls.addEventListener('start', function () {
      cancelHideTransform()
    })

    orbitControls.addEventListener('end', function () {
      delayHideTransform()
    })

    const dragControls = new DragControls(objects, camera, renderer.domElement)
    dragControls.enabled = false
    dragControls.addEventListener('dragstart', function (event) {
      event.object.material.opacity = 0.33
      orbitControls.enabled = false
    })
    dragControls.addEventListener('dragend', function (event) {
      event.object.material.opacity = 1
      orbitControls.enabled = true
    })
    dragControls.addEventListener('hoveron', function (event) {
      transformControl.attach(event.object)
      cancelHideTransform()
    })

    dragControls.addEventListener('hoveroff', function () {
      delayHideTransform()
    })

    let hiding: any

    function delayHideTransform() {
      cancelHideTransform()
      hideTransform()
    }

    function hideTransform() {
      hiding = setTimeout(function () {
        transformControl.detach()
      }, 2500)
    }

    function cancelHideTransform() {
      if (hiding) clearTimeout(hiding)
    }

    transformControl = new TransformControls(camera, renderer.domElement)
    transformControl.addEventListener('change', threeRender)
    transformControl.addEventListener('dragging-changed', function (event) {
      orbitControls.enabled = !event.value
    })

    window.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 71: // g
          transformControl.setMode('translate')
          break
        case 82: // r
          transformControl.setMode('rotate')
          break
        case 83: // s
          transformControl.setMode('scale')
          break
      }
    })

    scene.add(transformControl)
  }

  function initSky() {
    sky = new Sky()
    sky.scale.setScalar(450000)
    scene.add(sky)

    const sunSphere = new THREE.Mesh(
      new THREE.SphereBufferGeometry(20000, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    )
    sunSphere.position.y = -700000
    sunSphere.visible = false

    const uniforms = sky.material.uniforms
    uniforms['turbidity'].value = 10
    uniforms['rayleigh'].value = 2
    uniforms['mieCoefficient'].value = 0.005
    uniforms['mieDirectionalG'].value = 0.8
    uniforms['luminance'].value = 1

    const theta = Math.PI * -0.2
    const phi = 2 * Math.PI * -0.2

    const distance = 400000
    sunSphere.position.x = distance * Math.cos(phi)
    sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta)
    sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta)

    sunSphere.visible = true

    uniforms['sunPosition'].value.copy(sunSphere.position)

    scene.add(sunSphere)
  }

  function initHelper() {
    // const helper = new THREE.GridHelper(1000, 25)
    // scene.add(helper)
  }

  function initLight() {
    const light = new THREE.DirectionalLight(0xffffff)
    light.position.setScalar(10)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0x404040))
  }

  // function initMesh() {
  //   wallMaterial = new THREE.MeshLambertMaterial({
  //     color: 'gray',
  //     // color: '0x606060',
  //     wireframe: false,
  //   })
  //   building = new THREE.Mesh(new THREE.BoxGeometry(5, 2, 0.25), wallMaterial)
  //   building.position.set(0, 1, 0)
  //   building.userData.size = {
  //     width: (building.geometry as any).parameters.width,
  //     height: (building.geometry as any).parameters.height,
  //     depth: (building.geometry as any).parameters.depth,
  //   }
  //   scene.add(building)

  //   win = new THREE.Mesh(
  //     new THREE.BoxGeometry(1, 1, 0.25),
  //     new THREE.MeshLambertMaterial({
  //       color: 'brown',
  //     })
  //   )
  //   win.geometry.translate(0, 0, 0.125)
  //   win.position.set(3, 0.5, 1.5)
  //   scene.add(win)
  // }

  function initEvent() {
    ref.current!.addEventListener('mousemove', onMouseMove, false)
    // ref.current!.addEventListener('mousedown', onMouseDown, false)
    // ref.current!.addEventListener('mouseup', onMouseUp, false)

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      threeRender()
    }
  }

  function onMouseMove(event: MouseEvent) {
    event.preventDefault()
    orbitControls.dispatchEvent({ type: 'EVENT_CAMERA_MOVED', target: event })
  }

  // function onMouseMove(event: MouseEvent) {
  //   event.preventDefault()

  //   // Edge会侦听 'EVENT_CAMERA_MOVED'事件
  //   orbitControls.dispatchEvent({ type: 'EVENT_CAMERA_MOVED', target: event })
  //   // mouse.set(
  //   //   (event.clientX / window.innerWidth) * 2 - 1,
  //   //   -((event.clientY / window.innerHeight) * 2 + 1)
  //   // )
  //   const mouseX = (event.clientX / window.innerWidth) * 2 - 1
  //   const mouseY = -(event.clientY / window.innerHeight) * 2 + 1
  //   const vector = new THREE.Vector3(mouseX, mouseY, 1)
  //   // const vector = new THREE.Vector3(mouse.x, mouse.y, 1)
  //   vector.unproject(camera) // .unproject: Ray from camera from 2D screen (mouse coordinates) into 3D object space.
  //   // console.log(mouse)
  //   // raycaster.setFromCamera(mouse, camera)
  //   raycaster.set(camera.position, vector.sub(camera.position).normalize()) //Raycaster position
  //   intersects = raycaster.intersectObjects([building])

  //   if (intersects.length == 0 || !dragging) {
  //     return
  //   }

  //   normalMatrix.getNormalMatrix(intersects[0].object.matrixWorld)
  //   worldNormal
  //     .copy(intersects[0].face.normal)
  //     .applyMatrix3(normalMatrix)
  //     .normalize()
  //   win.position.copy(intersects[0].point.setY(0.5)) // 半墙位置
  //   win.lookAt(lookAtVector.copy(intersects[0].point).add(worldNormal))

  //   makeHole()
  // }

  // function onMouseDown() {
  //   if (intersects.length > 0) {
  //     orbitControls.enableRotate = false
  //     dragging = true
  //   }
  // }

  // function onMouseUp() {
  //   orbitControls.enableRotate = true
  //   dragging = false
  // }

  // /**
  //  * 打洞
  //  */
  // function makeHole() {
  //   const width = building.userData.size.width * 0.5
  //   const height = building.userData.size.height * 0.5
  //   const depth = building.userData.size.depth * 0.5

  //   const shape = new THREE.Shape()
  //   shape.moveTo(-width, height)
  //   shape.lineTo(-width, -height)
  //   shape.lineTo(width, -height)
  //   shape.lineTo(width, height)
  //   shape.lineTo(-width, height)

  //   const pointAtWall = win.position.clone()
  //   building.worldToLocal(pointAtWall)
  //   const wWidth = (win.geometry as any).parameters.width * 0.5
  //   const wHeight = (win.geometry as any).parameters.height * 0.5

  //   const hole = new THREE.Path()
  //   hole.moveTo(pointAtWall.x - wWidth, pointAtWall.y + wHeight)
  //   hole.lineTo(pointAtWall.x - wWidth, pointAtWall.y - wHeight)
  //   hole.lineTo(pointAtWall.x + wWidth, pointAtWall.y - wHeight)
  //   hole.lineTo(pointAtWall.x + wWidth, pointAtWall.y + wHeight)
  //   hole.lineTo(pointAtWall.x - wWidth, pointAtWall.y + wHeight)

  //   shape.holes.push(hole)

  //   const extrudeSettings = {
  //     amount: depth * 2,
  //     bevelEnabled: false,
  //   }
  //   const extrudeGeometry = new THREE.ExtrudeBufferGeometry(
  //     shape,
  //     extrudeSettings
  //   )
  //   extrudeGeometry.translate(0, 0, -depth)
  //   building.geometry.dispose()
  //   building.geometry = extrudeGeometry
  // }

  async function search() {
    try {
      const result = await SearchUtil.search('*:*')
      result && setSearchResult(result.data)
    } catch (error) {
      throw error
    }
  }

  function redraw() {
    // 清除场景
    floors.forEach((floor) => {
      floor.removeFromScene()
    })

    edges.forEach((edge) => {
      edge.remove()
    })
    floors = []
    edges = []

    // 画地板和天花板
    floorplan.getRooms().forEach((room: Room) => {
      let threeFloor = new Floor(scene, room)
      floors.push(threeFloor)
      threeFloor.addToScene()
    })

    let eindex = 0
    // draw edges
    floorplan.wallEdges().forEach((edge: HalfEdge) => {
      let threeEdge = new Edge(scene, edge, orbitControls)
      threeEdge.name = 'edge_' + eindex
      edges.push(threeEdge)
      eindex += 1
    })
  }

  // function init3D() {
  //   renderer = new THREE.WebGLRenderer({
  //     // canvas: _configuration.view2DCanvasElem,
  //     antialias: true,
  //   })

  //   // 透视相机
  //   camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200)
  //   camera.position.z = 15
  //   camera.position.set(45, 10, 30)
  //   camera.lookAt(new THREE.Vector3(0, 0, 0))

  //   scene = new THREE.Scene()
  //   // _scene.background = new THREE.TextureLoader().load('')

  //   onWindowResize()
  // }

  // function onWindowResize(
  //   width = window.innerWidth,
  //   height = window.innerHeight
  // ): void {
  //   renderer.setSize(width, height)
  //   camera.aspect = width / height
  //   camera.updateProjectionMatrix()
  // }

  // // function update(time: number): void {
  // //   renderer.render(scene, camera)
  // // }
}
