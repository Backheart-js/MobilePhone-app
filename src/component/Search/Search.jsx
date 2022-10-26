import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Search.scss';

function Search() {
  return (
    <form action="" className="search__form lg:w-[300px] relative ">
        <input
          type="text"
          className="search__input h-full"
          placeholder="Nhập từ khóa..."
        />
        <button className="search__btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    </form>
  );
}

export default Search;
