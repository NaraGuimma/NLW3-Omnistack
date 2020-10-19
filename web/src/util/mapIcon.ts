import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map_marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [28, 38],
  iconAnchor: [14, 19],
  popupAnchor: [5, -20],
});

export default mapIcon;
