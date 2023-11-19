import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls,Preload,useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('desktop_pc/scene.gltf')
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
  
  const handlePosition = () =>{
    if(screenSize<500)
    return [-3,-1,-2]
    else if(screenSize<1024)
    return [0,-1,-1.5]
    else return [0,-1,-1.5]
  }

  const handleScale = () =>{
    if(screenSize<500)
    return 0.8
    else if(screenSize<1024)
    return 1
    else return 1.1
  }

  return (
    <mesh>
      <hemisphereLight 
      intensity={5}
      groundColor='black' />
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        castShadow
      />
      {/* <pointLight intensity={0.5}/> */}
      <primitive
        object={computer.scene}
        scale={handleScale()}

        position={handlePosition()}
        rotation={[-0.01,-0.2,-0.28]}
        
        
      />
    </mesh>
  )
}

const ComputersCanvas =()=>{
  return(
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    className='z-0'>
      <Suspense 
      fallback={<CanvasLoader />}
      >
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas