import { useFBX } from "@react-three/drei";

export function TwitterLogo() {
  const fbx = useFBX('twitter-logo.fbx')
  return <primitive object={fbx} scale={0.01} position={[-1, 0, 0]} />
}
