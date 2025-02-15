import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* single list de artista */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={7}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* single list de musicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Musicas"
          items={24}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
