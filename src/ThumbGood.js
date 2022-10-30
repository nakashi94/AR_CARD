import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const ThumbGood = () => {
  const obj = useLoader(OBJLoader, "thumb-good.obj", () => {});

  console.log(obj);
  return <primitive object={obj} scale={0.005}  position={[2, 1, 0]}/>;
};
