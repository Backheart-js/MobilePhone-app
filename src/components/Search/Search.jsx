import React, { useState, useEffect, useRef } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import { useDebounce } from "~/hooks";
import PopperWrapper from "../Popper/PopperWrapper";
import "./Search.scss";
import tgtdAPI, { tgtdCategory } from "~/utils/tgtdAPI";
import PopperItem from "../Popper/PopperItem/PopperItem";

function Search() {
  const [textSearch, setTextSearch] = useState('');
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setshowResult] = useState(true)
  const [category, setCategory] = useState(tgtdCategory.dtdd)

  const inputRef = useRef();
  const debounce = useDebounce(textSearch, 700);

  const handleOnSubmit = () => {};
  const handleInputChange = (e) => {
    setTextSearch(e.target.value);
  }
  const handleHideResult = () => {
    setshowResult(false);
  }

  useEffect(() => {
    const keyword = debounce.toLowerCase();
    let catalog = "";

    if (keyword.includes("điện thoại")) {
      catalog = tgtdCategory.dtdd;
    } else if (keyword.includes("laptop")) {
      catalog = tgtdCategory.laptop;
    } else if (keyword.includes("máy tính bảng") || keyword.includes("tablet")) {
      catalog = tgtdCategory.tablet;
    } else if (keyword.includes("smartwatch") || keyword.includes("đồng hồ")) {
      catalog = tgtdCategory.smartwatch;
    }

    const getResult = async () => {
      try {
        const response = await tgtdAPI.getProductsList(catalog);
        setCategory(catalog);
        setSearchResult(response);
        // console.log(response);
      } catch (error) {
        setSearchResult([]);
        throw error;
      }
    }

    getResult();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce])

  return (
    <HeadlessTippy
      interactive={true}
      visible={showResult && textSearch.length > 0 && searchResult.length > 0}
      placement="bottom-start"
      render={(attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className="searchresult__title">
              Sản phẩm gợi ý
            </div>
            <div className="searchresult__list">
              {searchResult.slice(0,5).map(dataItem => (
                <PopperItem data={dataItem} catalog={category} key={dataItem.id} />
              ))}
            </div>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <form action="" className="search__form lg:w-[300px] relative ">
        <input
          ref={inputRef}
          value={textSearch}
          type="text"
          className="search__input h-full"
          placeholder="Nhập từ khóa..."
          onChange={handleInputChange}
          onFocus={() => setshowResult(true)}
        />
        <button type="submit" className="search__btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </HeadlessTippy>
  );
}

export default Search;
