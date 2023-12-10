import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const EarthCanvas=()=>{
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer:true}}
      camera={{position:[-4,3,6],fov:45,near:0.1,far:200}}
    
    >
    <Suspense fallback={<CanvasLoader/>} >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
      />
      <Earth/>
    </Suspense>
    </Canvas>
  )
}

const Earth = () => {
  const earth = useGLTF('planet/scene.gltf')
  const [screenSize,setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])
  return (
    <primitive
      object={earth.scene}
      scale={screenSize>1280?2.5:3.25}
    />
  )
}

export default EarthCanvas