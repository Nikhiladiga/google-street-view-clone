import React, { useRef } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";

import firstPhoto from "./assets/1.png";
import secondPhoto from "./assets/2.png";
import thirdPhoto from "./assets/3.png";

function App() {
  const instanceRef = useRef(null);
  const plugins = [[VirtualTourPlugin, { renderMode: "3d" }]];

  const handleReady = (instance) => {
    instanceRef.current = instance;

    const virtualTour = instanceRef.current.getPlugin(VirtualTourPlugin);
    virtualTour.setNodes([
      {
        id: "1",
        panorama: firstPhoto,
        name: "One",
        links: [{ nodeId: "2", position: { textureX: 100, textureY: 1800 } }],
        defaultZoomLvl: 0,
      },
      {
        id: "2",
        panorama: secondPhoto,
        name: "Two",
        links: [
          { nodeId: "1", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "3", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "3",
        panorama: thirdPhoto,
        name: "Three",
        links: [{ nodeId: "2", position: { textureX: 3500, textureY: 1800 } }],
        defaultZoomLvl: 0,
      },
    ]);
  };

  return (
    <>
      <ReactPhotoSphereViewer
        src={firstPhoto}
        plugins={plugins}
        height={"100vh"}
        width={"100vw"}
        onReady={handleReady}
      ></ReactPhotoSphereViewer>
    </>
  );
}

export default App;
