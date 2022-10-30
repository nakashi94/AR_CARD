import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';

import { House } from "./House";
import { ThumbGood } from "./ThumbGood";
import { TwitterLogo } from "./TwitterLogo";

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ARCanvas
        camera={ { position: [0, 0, 0] } }
        onCreated={ ({ gl }) => {
          gl.setSize(window.innerWidth, window.innerHeight)
        } }>
        <ambientLight />
        <pointLight position={ [10, 10, 0] }  />
        <ARMarker
          type={"pattern"}
          patternUrl={"data/sample.patt"}
          onMarkerFound={() => console.log(200)}
        >
          <Suspense fallback={null}>
            <House scale={[0.05, 0.05, 0.05]} position={[1, 1, 1]} />
            <ThumbGood />
            <TwitterLogo />
            <OrbitControls />
          </Suspense>
        </ARMarker>
      </ARCanvas>
    </div>
  );
}

export default App;
