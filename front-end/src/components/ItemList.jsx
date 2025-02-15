import { Link, useLocation } from "react-router-dom";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  let finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {/* verifica se esta na home do site pela variavel pathName */}
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              // id={currObj.id}
              // name={currObj.name}
              // image={currObj.image}
              // banner={currObj.banner}
              {...currObj}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;

//  {Array(items).fill().map(( currtentValue, index) => <SingleItem key={`${title}-${index}`} />)}
