import React, { ReactNode, useState, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import {
  Engine,
  Scene,
  useBabylonScene,
  useBabylonEngine,
  useBabylonCanvas,
  Skybox,
} from 'react-babylonjs'
import {
  Vector3,
  Color3,
  SceneLoader,
  Engine as BabylonEngine,
  Scene as BabylonScene,
  Camera,
  Mesh,
  AbstractMesh,
  Matrix,
  Tools,
  VideoTexture,
  StandardMaterial,
  ExecuteCodeAction,
  ActionManager,
  MeshBuilder,
  Axis,
  Space,
} from '@babylonjs/core'
import '@babylonjs/core/Debug/debugLayer'
import '@babylonjs/inspector'
import Hls from 'hls.js'

interface IProps {
  children?: ReactNode
  // any other props that come into the component
}

// https://github.com/brianzinn/react-babylonjs/issues/60
const ThemedBox = () => {
  const ctx = React.useContext(ThemeContext)
  return (
    <box name={ctx.name} position={ctx.position}>
      <standardMaterial
        name="M_Box"
        diffuseColor={ctx.color}
        specularColor={Color3.Black()}
      />
    </box>
  )
}

// const onSceneMount = ({
//   scene,
//   canvas,
// }: {
//   scene: BabylonScene
//   canvas: HTMLCanvasElement
// }) => {
//   const [loadProgress, setLoadProgress] = useState(0)
//   SceneLoader.LoadAssetContainer(
//     '/files/model/',
//     'house_065.glb',
//     scene,
//     (container) => {
//       const meshes = container.meshes
//       const transformNodes = container.transformNodes

//       transformNodes.forEach((item) => {
//         if (item.name === 'Camera_Orientation') {
//           console.log(item.getChildren()[0])
//           scene.activeCamera = item.getChildren()[0] as Camera
//           scene.activeCamera.attachControl(canvas)
//         }
//       })

//       meshes.forEach((mesh) => {
//         scene.addMesh(mesh)
//       })
//     }
//   )
let engine: BabylonEngine
let canvas: HTMLCanvasElement
const EngineChild = () => {
  engine = useBabylonEngine() as BabylonEngine
  canvas = useBabylonCanvas() as HTMLCanvasElement

  return null
}

const MyScene = (props: any) => {
  // const engine = useBabylonEngine()
  // const canvas = useBabylonCanvas()
  const scene = useBabylonScene() as BabylonScene
  const ctx = React.useContext(ThemeContext)
  const [loadProgress, setLoadProgress] = useState(0)

  const TVRef = React.useRef()
  const videoMatRef = React.useRef()

  // scene.debugLayer.show({
  //   overlay: true,
  // })

  // engine and canvas are null.  they are not currently bridged.
  // https://github.com/konvajs/react-konva/issues/188#issuecomment-478302062
  // console.log('MyScene', { engine, canvas, scene })

  useEffect(() => {
    SceneLoader.LoadAssetContainer(
      '/files/model/',
      'house_065.glb',
      scene,
      (container) => {
        const meshes = container.meshes
        const transformNodes = container.transformNodes

        transformNodes.forEach((item) => {
          if (item.name === 'Camera_Orientation') {
            scene.activeCamera = item.getChildren()[0] as Camera
            scene.activeCamera.attachControl(canvas)
          }
        })

        meshes.forEach((mesh) => {
          scene.addMesh(mesh)
        })

        setLoadProgress(1)
      },
      (evt) => {
        let modelLoadProgress = evt.lengthComputable
          ? evt.loaded / evt.total
          : evt.loaded /
            (props.estimatedFileSize *
              0.085) /* provided fileSize is not for 'view' manifest, a bad guess often, but generally factor ~0.085 smaller  */
        setLoadProgress(modelLoadProgress)
      }
    )
  }, [])

  useEffect(() => {
    // if (TVRef.current) {
    const stream1 = '/files/stream/house/manifest.m3u8'
    const videoEle = document.createElement('video')
    videoEle.autoplay = true
    videoEle.hidden = true
    videoEle.src = stream1
    document.getElementsByTagName('body')[0].appendChild(videoEle)

    // const TV = (TVRef.current as any).hostInstance
    const TV = MeshBuilder.CreatePlane(
      'myPlane',
      { width: 1.7, height: 1 },
      scene
    )
    // TV.rotate(Axis.Z, Math.PI, Space.WORLD)
    TV.rotation = new Vector3(-(Math.PI / 180) * 7.2, Math.PI / 2, Math.PI)
    TV.position = new Vector3(-4.09, 0.978, -8.33)
    TV.scaling = new Vector3(0.58, 0.62, 0.557)
    TV.actionManager = new ActionManager(scene)
    const video = document.querySelector('video') as HTMLVideoElement
    const videoTexture = new VideoTexture('video', video, scene, true, true)

    const videoMat = new StandardMaterial('textVid', scene)
    // const videoMat = (videoMatRef.current as any)
    //   .hostInstance as StandardMaterial
    videoMat.backFaceCulling = false
    videoMat.diffuseTexture = videoTexture
    videoMat.emissiveColor = Color3.White()
    TV.material = videoMat
    const htmlVideo = videoTexture.video

    if (Hls.isSupported()) {
      var hls = new Hls()
      hls.loadSource(stream1)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        TV.actionManager!.registerAction(
          new ExecuteCodeAction(ActionManager.OnPickTrigger, function (event) {
            htmlVideo.play()
          })
        )
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = stream1
      video.addEventListener('loadedmetadata', function () {
        TV.actionManager!.registerAction(
          new ExecuteCodeAction(ActionManager.OnPickTrigger, function (event) {
            htmlVideo.play()
          })
        )
      })
    }
    // }
  }, [])

  return (
    <>
      {/* <box name="box1" size={2} position={new Vector3(0, 1, 0)} /> */}
      {/* <model
        scaleToDimension={props.scaleTo}
        onLoadProgress={(evt) => {
          let modelLoadProgress = evt.lengthComputable
            ? evt.loaded / evt.total
            : evt.loaded /
              (props.estimatedFileSize *
                0.085) 

          setLoadProgress(modelLoadProgress)
        }}
        onModelLoaded={(model) => {
          console.log(model)
          setLoadProgress(1)
          if (props.onModelLoaded) {
            props.onModelLoaded(model, props.sceneContext)
          }
        }}
        position={props.center}
        rootUrl="/files/model/"
        sceneFilename="house_065.glb"
        pluginExtension={props.fileExtension}
        rotation={props.modelRotation}
      /> */}
      {loadProgress === 1 && (
        <Skybox rootUrl={'/files/texture/env/houseSpecularHDR.env'} />
      )}
      {/* <mesh
        name="video-mesh"
        rotation={new Vector3(-(Math.PI / 180) * 7.2, Math.PI / 2, Math.PI)}
        position={new Vector3(-4.09, 0.978, -8.33)}
        scaling={new Vector3(0.58, 0.62, 0.557)}
        visibility={loadProgress === 1 ? 1 : 0}
      >
        <plane name="video-plane" ref={TVRef as any} width={1.7} height={1}>
          <standardMaterial
            name="video-material"
            ref={videoMatRef}
            backFaceCulling={false}
            emissiveColor={Color3.White()}
          ></standardMaterial>
        </plane>
      </mesh> */}
      {loadProgress < 1 && (
        <>
          <mesh
            name="load-mesh"
            rotation={props.progressRotation}
            position={props.center}
          >
            <box
              key="progress"
              name="boxProgress"
              height={props.scaleTo / 15}
              width={props.scaleTo}
              depth={props.scaleTo / 30}
              scaling={new Vector3(loadProgress, 1, 1)}
              position={new Vector3(props.scaleTo / 2, 0, props.scaleTo / 60)}
              setPivotMatrix={[Matrix.Translation(-props.scaleTo, 0, 0)]}
              setPreTransformMatrix={[
                Matrix.Translation(-props.scaleTo / 2, 0, 0),
              ]}
            >
              <standardMaterial
                name="progress-mat"
                diffuseColor={ctx.color}
                specularColor={Color3.Black()}
              />
            </box>
            <box
              key="back"
              name="boxBack"
              height={props.scaleTo / 15}
              width={props.scaleTo}
              depth={props.scaleTo / 30}
              position={new Vector3(0, 0, props.scaleTo / -60)}
            />
          </mesh>
        </>
      )}
    </>
  )
}

const EngineScene = ({ children, ...props }: IProps) => {
  const id = 'portal-canvas'
  return (
    <div style={{ flex: 1, display: 'flex' }}>
      <ThemeContext.Consumer>
        {(value) => (
          <Engine
            antialias
            adaptToDeviceRatio
            canvasId={id}
            width={window.innerWidth}
            height={window.innerHeight}
          >
            <EngineChild />
            <Scene>
              <ThemeContext.Provider value={value}>
                {/* <arcRotateCamera
                  name="arc"
                  target={Vector3.Zero()}
                  minZ={0.001}
                  alpha={-Math.PI / 4}
                  beta={Math.PI / 4}
                  radius={5}
                />
                <hemisphericLight
                  name="light1"
                  intensity={0.7}
                  direction={Vector3.Up()}
                /> */}
                {/* <ground name="ground1" width={6} height={6} subdivisions={2} />
                <ThemedBox /> */}
                <freeCamera
                  name="camera1"
                  position={new Vector3(0, 0, -10)}
                  setTarget={[Vector3.Zero()]}
                />
                <hemisphericLight
                  name="light1"
                  intensity={0.7}
                  direction={Vector3.Up()}
                />
                <MyScene
                  scaleTo={3.0}
                  progressRotation={new Vector3(0, Math.PI, 0)}
                />
                {children}
              </ThemeContext.Provider>
            </Scene>
          </Engine>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export { EngineScene }
