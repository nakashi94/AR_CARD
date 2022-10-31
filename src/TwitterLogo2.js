import { useFBX } from "@react-three/drei";

export function TwitterLogo2(props) {
  const fbx = useFBX('twitter-logo.fbx')
  return <primitive object={fbx} scale={0.008} {...props} />
}
