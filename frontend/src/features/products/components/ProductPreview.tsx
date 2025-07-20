import { Link } from "react-router-dom";
import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { addFavorite, removeFavorite, selectFavorites } from "../favoritesSlice";

export const ProductPreview = (props: IProduct) => {
    const dispatch = useDispatch<AppDispatch>();
    const favorites = useSelector(selectFavorites);

    const [isFavorite, setIsFavorite] = useState<boolean>(favorites.some(favorite => favorite.id === props.id));
    const handleFavoriteChange = () => {
        isFavorite
            ? dispatch(removeFavorite({ id: props.id }))
            : dispatch(addFavorite(props));
        setIsFavorite((prevFavorite) => !prevFavorite);
    };

    return (
        <div
        className="relative flex flex-col rounded-2xl bg-white shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl group"
        data-category={`${props.categoryId}`}
        data-created-at={`${props.createdAt}`}
        data-price={`${props.price}`}
        style={{ minWidth: 200, maxWidth: 240, margin: "0 auto" }}
      >
        <div className="relative">
          <Link to={`/products/${props.id}`}>
            <img
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              src={props.image as string}
              alt={props.name}
            />
          </Link>
          <button
            className="absolute top-3 right-3 bg-white/80 hover:bg-pink-100 p-2 rounded-full shadow-md transition-colors"
            onClick={handleFavoriteChange}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? (
              <MdFavorite className="w-6 h-6 text-pink-500" />
            ) : (
              <MdFavoriteBorder className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>
        <div className="flex flex-col flex-1 justify-between p-4">
          <div>
            <p className="text-xs text-gray-400 mb-1 text-center">
              <Link to={`/products/${props.id}`} className="hover:underline">
                Detail
              </Link>
            </p>
            <h5 className="font-bold text-lg text-center text-gray-800 mb-2 truncate">{props.name}</h5>
          </div>
          <div className="flex items-center justify-center mt-2">
            <span className="text-xl font-semibold text-primary">${props.price}</span>
          </div>
        </div>
      </div>
    );
};
