import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';

import { House } from "./House";
import { ThumbGood } from "./ThumbGood";
import { TwitterLogo } from "./TwitterLogo";
import { TwitterLogo1 } from "./TwitterLogo1";
import { TwitterLogo2 } from "./TwitterLogo2";

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
            <House scale={[0.05, 0.05, 0.05]} position={[0, 1, 0]} />
            <ThumbGood />
            <TwitterLogo position={[-0.5, 0, 0]} />
            <TwitterLogo1 position={[-1, 1, 0]} />
            <TwitterLogo2 position={[-1.5, -1, 0]} />
            <OrbitControls />
          </Suspense>
        </ARMarker>
      </ARCanvas>
    </div>
  );
}

export default App;
