import React, { useEffect, useRef } from "react";
import "leaflet-editable";
import ReactLeafletEditable from "react-leaflet-editable";
import { Map, TileLayer, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Demo() {
  const editRef = useRef();
  const [map, setMap] = React.useState();

  const editPolygon = () => {
    editRef.current.startRectangle();
    console.log(editRef.current);
  };

  const mapRef = useRef();

  useEffect(() => {
    if (!mapRef.current) return;

    setMap(mapRef.current.leafletElement);
  }, []);

  return (
    <ReactLeafletEditable ref={editRef} map={map}>
      <button onClick={editPolygon} className="editable-btn">
        Create Polygon
      </button>
      <Map
        style={{
          height: "700px",
          backgroundColor: "",
          flexGrow: "1",
          cursor: `10`
        }}
        ref={mapRef}
        editable={true}
        zoom={4}
        maxZoom={18}
        center={[35, 105]}
      >
        <LayerGroup>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer url="http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png" />
        </LayerGroup>
      </Map>
    </ReactLeafletEditable>
  );
}

export default Demo;
