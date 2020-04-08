import React from 'react'
// import { Canvas } from 'react-three-fiber'
// import { Box } from '../box/Box'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Sky } from 'three/examples/jsm/objects/Sky'
import './style.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
// import { makeStyles } from '@material-ui/core/styles'
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles,
  fade,
} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
// import TreeView from '@material-ui/lab/TreeView'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight'
// import TreeItem from '@material-ui/lab/TreeItem'
import { SearchUtil } from 'src/lib/util/SearchUtil'
import { List, ListItem, Card, CardMedia, CardHeader } from '@material-ui/core'
// import ThreeEngine from '../../lib/engine/ThreeEngine'

// const useStyles = makeStyles((theme) => ({
//   leftBtnGrp: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }))

const styles = (theme: Theme) =>
  createStyles({
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
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(66),
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

// interface IProps extends WithStyles<typeof styles> {
//   isVisible?: boolean
// }

interface IProps {
  isVisible?: boolean
}

interface IState {
  searchResult: []
}

class View3DBasic extends React.Component<
  IProps & WithStyles<typeof styles>,
  IState
> {
  private renderer!: THREE.WebGLRenderer
  private camera!: THREE.PerspectiveCamera
  private scene!: THREE.Scene
  private sky!: Sky
  private controls!: OrbitControls
  private ref = React.createRef<HTMLDivElement>()

  private building!: THREE.Mesh
  private wallMaterial!: THREE.Material
  private win!: THREE.Mesh

  private raycaster = new THREE.Raycaster()
  // private mouse = new THREE.Vector2()
  private intersects!: any
  private normalMatrix = new THREE.Matrix3()
  private worldNormal = new THREE.Vector3()
  private lookAtVector = new THREE.Vector3()
  private dragging = false

  constructor(props: any) {
    super(props)
    // ThreeEngine.init()
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    // this.renderer = ThreeEngine.renderer
    // this.camera = ThreeEngine.perspectiveCamera
    this.camera.position.set(45, 10, 30)
    // this.camera.rotation.x = (45 * Math.PI) / 180
    // this.camera.rotateOnAxis(new THREE.Vector3(0, 1, 0), (45 * Math.PI) / 180)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    this.scene = new THREE.Scene()
    // this.camera.lookAt(this.scene.position)
    // this.scene.background = new THREE.Color(0x333333)

    // this.scene = ThreeEngine.scene

    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.state = { searchResult: [] }

    // ThreeEngine.loadSerialized()
  }

  // shouldComponentUpdate() {
  //   if (this.ref.current!.childNodes.length > 0) {
  //     return true
  //   }
  //   return false
  // }

  componentWillUpdate(nextProps: IProps) {
    console.log(nextProps)
  }

  // static getDerivedStateFromProps(props: any) {
  //   console.log(props)
  // }

  // componentDidUpdate(nextProps: IProps) {
  //   console.log('componentDidUpdate' + nextProps)
  // }

  componentDidMount() {
    // const geometry = new THREE.BoxGeometry()
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // const cue = new THREE.Mesh(geometry, material)
    // this.scene.add(cue)
    this.init()
  }

  render() {
    // const classes = useStyles()
    return (
      <div className={this.props.isVisible ? 'show' : 'hide'}>
        <div className={this.props.classes.leftBtnGrp}>
          <ButtonGroup orientation="vertical" color="primary" variant="text">
            <Button>
              <SearchIcon />
            </Button>
          </ButtonGroup>
        </div>
        <Paper className={this.props.classes.searchPanel} elevation={3}>
          <div className={this.props.classes.search}>
            <div className={this.props.classes.searchIcon}>
              <Button color="primary" variant="text" onClick={this.serach}>
                <SearchIcon />
              </Button>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: this.props.classes.inputRoot,
                input: this.props.classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {/* <TreeView
            className={this.props.classes.treeRoot}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label="Applications">
              <TreeItem nodeId="2" label="Calendar" />
              <TreeItem nodeId="3" label="Chrome" />
              <TreeItem nodeId="4" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
              <TreeItem nodeId="10" label="OSS" />
              <TreeItem nodeId="6" label="Material-UI"></TreeItem>
            </TreeItem>
          </TreeView> */}
          <List>
            {this.state.searchResult.map((item: any) => {
              return (
                <ListItem id={item.id} key={item.id}>
                  <Card className={this.props.classes.searchResultRoot}>
                    <CardHeader title={item.name} />
                    <CardMedia
                      className={this.props.classes.searchResultMedia}
                      image={`/files/image/${item.uuid}.jpg`}
                      title={item.name}
                    />
                  </Card>
                </ListItem>
              )
            })}
          </List>
        </Paper>
        <div ref={this.ref}></div>
      </div>
    )
  }

  private init() {
    this.ref.current?.appendChild(this.renderer.domElement)

    this.initSky()
    this.initLight()
    this.initHelper()
    this.initControls()
    this.initMesh()
    this.initEvent()
    // 动画循环渲染
    this.renderer.setAnimationLoop(() => {
      this.controls.update()
      this.threeRender()
    })
  }

  private threeRender() {
    this.renderer.render(this.scene, this.camera)
  }

  private initControls() {
    // controls
    this.controls = new OrbitControls(this.camera, this.ref.current as any)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05

    this.controls.screenSpacePanning = false

    // controls.minDistance = 100
    // controls.maxDistance = 500

    this.controls.maxPolarAngle = Math.PI / 2
  }

  private initSky() {
    this.sky = new Sky()
    this.sky.scale.setScalar(450000)
    this.scene.add(this.sky)

    const sunSphere = new THREE.Mesh(
      new THREE.SphereBufferGeometry(20000, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    )
    sunSphere.position.y = -700000
    sunSphere.visible = false

    const uniforms = this.sky.material.uniforms
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

    this.scene.add(sunSphere)
  }

  private initHelper() {
    const helper = new THREE.GridHelper(30, 30)
    this.scene.add(helper)
  }

  private initLight() {
    const light = new THREE.DirectionalLight(0xffffff)
    light.position.setScalar(10)
    this.scene.add(light)
    this.scene.add(new THREE.AmbientLight(0x404040))
  }

  private initMesh() {
    this.wallMaterial = new THREE.MeshLambertMaterial({
      color: 'gray',
      // color: '0x606060',
      wireframe: false,
    })
    this.building = new THREE.Mesh(
      new THREE.BoxGeometry(5, 2, 0.25),
      this.wallMaterial
    )
    this.building.position.set(0, 1, 0)
    this.building.userData.size = {
      width: (this.building.geometry as any).parameters.width,
      height: (this.building.geometry as any).parameters.height,
      depth: (this.building.geometry as any).parameters.depth,
    }
    this.scene.add(this.building)

    this.win = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 0.25),
      new THREE.MeshLambertMaterial({
        color: 'brown',
      })
    )
    this.win.geometry.translate(0, 0, 0.125)
    this.win.position.set(3, 0.5, 1.5)
    this.scene.add(this.win)
  }

  private initEvent() {
    this.ref.current!.addEventListener(
      'mousemove',
      this.onMouseMove.bind(this),
      false
    )
    this.ref.current!.addEventListener(
      'mousedown',
      this.onMouseDown.bind(this),
      false
    )
    this.ref.current!.addEventListener(
      'mouseup',
      this.onMouseUp.bind(this),
      false
    )
  }

  private onMouseMove(event: MouseEvent) {
    event.preventDefault()
    // this.mouse.set(
    //   (event.clientX / window.innerWidth) * 2 - 1,
    //   -((event.clientY / window.innerHeight) * 2 + 1)
    // )
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    const vector = new THREE.Vector3(mouseX, mouseY, 1)
    // const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 1)
    vector.unproject(this.camera) // .unproject: Ray from camera from 2D screen (mouse coordinates) into 3D object space.
    // console.log(this.mouse)
    // this.raycaster.setFromCamera(this.mouse, this.camera)
    this.raycaster.set(
      this.camera.position,
      vector.sub(this.camera.position).normalize()
    ) //Raycaster position
    this.intersects = this.raycaster.intersectObjects([this.building])

    if (this.intersects.length == 0 || !this.dragging) {
      return
    }

    this.normalMatrix.getNormalMatrix(this.intersects[0].object.matrixWorld)
    this.worldNormal
      .copy(this.intersects[0].face.normal)
      .applyMatrix3(this.normalMatrix)
      .normalize()
    this.win.position.copy(this.intersects[0].point.setY(0.5)) // 半墙位置
    this.win.lookAt(
      this.lookAtVector.copy(this.intersects[0].point).add(this.worldNormal)
    )

    this.makeHole()
  }

  private onMouseDown() {
    if (this.intersects.length > 0) {
      this.controls.enableRotate = false
      this.dragging = true
    }
  }

  private onMouseUp() {
    this.controls.enableRotate = true
    this.dragging = false
  }

  /**
   * 打洞
   */
  private makeHole() {
    const width = this.building.userData.size.width * 0.5
    const height = this.building.userData.size.height * 0.5
    const depth = this.building.userData.size.depth * 0.5

    const shape = new THREE.Shape()
    shape.moveTo(-width, height)
    shape.lineTo(-width, -height)
    shape.lineTo(width, -height)
    shape.lineTo(width, height)
    shape.lineTo(-width, height)

    const pointAtWall = this.win.position.clone()
    this.building.worldToLocal(pointAtWall)
    const wWidth = (this.win.geometry as any).parameters.width * 0.5
    const wHeight = (this.win.geometry as any).parameters.height * 0.5

    const hole = new THREE.Path()
    hole.moveTo(pointAtWall.x - wWidth, pointAtWall.y + wHeight)
    hole.lineTo(pointAtWall.x - wWidth, pointAtWall.y - wHeight)
    hole.lineTo(pointAtWall.x + wWidth, pointAtWall.y - wHeight)
    hole.lineTo(pointAtWall.x + wWidth, pointAtWall.y + wHeight)
    hole.lineTo(pointAtWall.x - wWidth, pointAtWall.y + wHeight)

    shape.holes.push(hole)

    const extrudeSettings = {
      amount: depth * 2,
      bevelEnabled: false,
    }
    const extrudeGeometry = new THREE.ExtrudeBufferGeometry(
      shape,
      extrudeSettings
    )
    extrudeGeometry.translate(0, 0, -depth)
    this.building.geometry.dispose()
    this.building.geometry = extrudeGeometry
  }

  serach = async () => {
    const result = await SearchUtil.search('*:*')
    this.setState({ searchResult: result.data })
  }
}

export const View3D = withStyles(styles)(View3DBasic)
