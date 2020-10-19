import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map_marker.svg';

import '../styles/pages/house-map.css';
import mapIcon from '../util/mapIcon';
import api from '../services/api';

interface House {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function RetirementHouse() {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    api.get('houses').then((response) => {
      setHouses(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy Smiles" />
          <h2>Escolha uma casa de repouso no mapa</h2>
          <p>Eles esperam a sua visita :) !</p>
        </header>
        <footer>Guaratinguetá</footer>
        <span>São Paulo</span>
      </aside>
      <Map
        center={[-22.7921579, -45.238672]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}{x}{y}@2x?access_token=${process.env.RECT_APP_MAPBOX_TOKEN}`}
        />*/}
        {houses.map((house) => {
          return (
            <Marker
              icon={mapIcon}
              position={[house.latitude, house.longitude]}
              key={house.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                class="map-popup"
              >
                {house.name}
                <Link to={`/houses/${house.id}`}>
                  <FiArrowRight size={32} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/create" className="create-house">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link>
    </div>
  );
}

export default RetirementHouse;
