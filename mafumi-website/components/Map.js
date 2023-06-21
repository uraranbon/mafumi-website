import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import styles from '../styles/Map.module.scss'

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 35.6973000,
  lng: 139.7619257,
};

const zoom = 16;

const mapStyles = [
  {
    "stylers": [
      {
        "hue": "#dd0d0d"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "lightness": 100
      },
      {
        "visibility": "simplified"
      }
    ]
  }
]

const options = {
  styles: mapStyles,
  zoomControl: true,
};

const position = {
  lat: 35.6945729,
  lng: 139.7619257,
};

export default function Map() {
  return (
    <div className={styles.map}>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={options}
        >
          <MarkerF position={position} icon={"../sources/image/mapIcon.svg"} />
        </GoogleMap>
      </LoadScript>
      <div className={styles.mapInfo}>
        最寄り駅<br /><br />
        ・JR 御茶ノ水駅　徒歩8分<br />
        ・都営新宿線 小川町駅　徒歩6分<br />
        ・東京メトロ 神保町駅　徒歩6分<br /><br />
        ※もし道に迷われてしまった場合、<br />
        　お電話をいただければ道順をご案内いたします。
      </div>
    </div>
  )
}
