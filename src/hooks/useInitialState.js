import { useState, useEffect } from 'react';

/* para subir el API FAKE se tiene que instalar 
    npm i json-server
    Luego ejecutar el comando:
    json-server <Nombre_del_archivo_json>
    en este caso:
    json-server initialState.json
*/

const useInitialState = (API) => {
  const [ videos, setVideos ] = useState([]);
  
  useEffect(() => {
      fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data));
    }, []);
    return videos;
  };

export default useInitialState;
