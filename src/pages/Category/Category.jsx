import { faFilter, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ListProduct from "~/components/ListProduct";

import "./Category.scss";

function Category() {
  const filterVariables = {
    dtdd: {
      brand: ["Apple", "Samsung", "Oppo", "Vivo", "Xiaomi"],
      ram: ["3 GB", "4 GB", "6 GB", "8 GB", "12 GB"],
      rom: ["32 GB", "64 GB", "128 GB", "256 GB", "512 GB"],
    },
    laptop: {
      brand: ["Apple", "Asus", "Dell", "Hp", "Lenovo"],
      ram: ["8 GB", "12 GB", "16 GB", "32 GB", "64 GB"],
      rom: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
    },
    tablet: {
      brand: ["Apple", "Samsung", "Oppo", "Lenovo", "Xiaomi"],
      ram: ["4 GB", "6 GB", "8 GB", "12 GB", "16 GB"],
      rom: ["32 GB", "64 GB", "128 GB", "256 GB", "512 GB"],
    },
    smartwatch: {
      brand: ["Apple", "Samsung", "Oppo", "Lenovo", "Xiaomi"],
    },
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const { catalog } = useParams();

  const initFilter = 
    searchParams.get("brand") !== null
      ? {
          brand: searchParams.get("brand"),
        }
      : {};
  const [filter, setFilter] = useState(initFilter);

  const handleChangeFilter = (e) => {
    let filterValue = e.target.closest('.dropdown-btn').value;
    let filterKey = e.target.closest('.dropdown-btn').dataset.filter;
    
    setFilter({
      ...filter,
      [filterKey]: filterValue
    })

    if (filterKey === "brand") {
      const brand = e.target.closest('.dropdown-btn').value
      setSearchParams({brand})
    }
  };

  return (
    <div className="max-w-[1220px] mx-auto mt-5">
      <div className="filter__wrapper flex items-center">
        <button className="filter-title custom-btn-filter">
          <FontAwesomeIcon className="text-[#666]" icon={faFilter} />
          <span className="ml-2">Bộ lọc</span>
        </button>
        <div className="filter__btn-wrapper relative">
          <button className="filter-btn custom-btn-filter">
            <span className="mr-2">Hãng</span>
            <FontAwesomeIcon
              className="dropdown-icon text-[#666]"
              icon={faSortDown}
            />
          </button>
          <div className="filter__dropdown-wrapper custom-dropdown-filter">
            {filterVariables[catalog].brand.map((brand, index) => (
              <button
                className={`dropdown-btn custom-btn-dropdonw ${
                  filter.brand === brand ? "active" : ""
                }`}
                data-filter={"brand"}
                value={brand}
                key={index}
                onClick={handleChangeFilter}
              >
                <p className="font-semibold text-[#666]">{brand}</p>
              </button>
            ))}
          </div>
        </div>
        {catalog !== "smartwatch" && (
          <div className="filter__btn-wrapper relative">
            <button className="filter-btn custom-btn-filter">
              <span className="mr-2">Ram</span>
              <FontAwesomeIcon
                className="dropdown-icon text-[#666]"
                icon={faSortDown}
              />
            </button>
            <div className="filter__dropdown-wrapper custom-dropdown-filter">
              {filterVariables[catalog].ram.map((ram, index) => (
                <button
                  className={`dropdown-btn custom-btn-dropdonw ${
                    filter.ram === ram ? "active" : ""
                  }`}
                  data-filter={"ram"}
                  value={ram}
                  key={index}
                  onClick={handleChangeFilter}
                >
                  <p className="font-semibold text-[#666]">{ram}</p>
                </button>
              ))}
            </div>
          </div>
        )}
        {catalog !== "smartwatch" && (
          <div className="filter__btn-wrapper relative">
            <button className="filter-btn custom-btn-filter">
              <span className="mr-2">Rom</span>
              <FontAwesomeIcon
                className="dropdown-icon text-[#666]"
                icon={faSortDown}
              />
            </button>
            <div className="filter__dropdown-wrapper custom-dropdown-filter">
              {filterVariables[catalog].rom.map((rom, index) => (
                <button
                  className={`dropdown-btn custom-btn-dropdonw ${
                    filter.rom === rom ? "active" : ""
                  }`}
                  data-filter={"rom"}
                  value={rom}
                  key={index}
                  onClick={handleChangeFilter}
                >
                  <p className="font-semibold text-[#666]">{rom}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {Object.keys(filter).length > 0 && <div className="filter__result-wrapper">
        <span className="">Hiển thị kết quả cho:</span>
        <div className="filter__result flex items-center ml-4">
          {Object.values(filter).map((value, index) => (
            <div className="filter__tag px-3 py-2" key={index}>{value}</div>
          ))}
        </div>
      </div>}

      <div className="productList">
        <ListProduct className={'mt-6'} category={catalog} params={filter} limit={40} />
      </div>
    </div>
  );
}

export default Category;
