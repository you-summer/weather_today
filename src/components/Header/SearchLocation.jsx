import "./SearchLocation.css";
import { useState, useContext, useEffect } from "react";
import { SearchLocationContext } from "../../App";
import { IsDarkContext } from "../../App";

const SearchLocation = () => {
  const [search, setSearch] = useState(""); // 검색어를 저장
  const [selectAddress, setSelectArddress] = useState(""); // 검색한 주소 이름
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isDark = useContext(IsDarkContext);

  const { getSearchAddress, searchData, setCoords, setChangeAddress } =
    useContext(SearchLocationContext);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    setIsDropdownOpen(true);
    // console.log("검색", search);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }
    getSearchAddress(search);
    // setSearchResult(data);
  }, [search]);

  // console.log("searchData", searchData);

  const onClickAddressName = (item) => {
    // console.log("선택된 주소", item);
    let address_name = item.address_name;
    let lon = item.x; //경도
    let lat = item.y; //위도
    setCoords({ lat, lon });
    setSelectArddress(address_name);
    setSearch(""); // 입력값 비우기
    setIsDropdownOpen(false);
  };

  // if(selectAddress)
  useEffect(() => {
    changeAddress(selectAddress);
  }, [selectAddress]);

  const changeAddress = (selectAddress) => {
    setChangeAddress(selectAddress);
  };

  return (
    <div>
      <input
        placeholder="지역명을 입력해주세요..."
        className={`header_input ${isDark ? " dark" : ""}`}
        onChange={onChangeSearch}
        value={search}
      />
      {isDropdownOpen &&
        searchData &&
        searchData.documents &&
        searchData.documents.length > 0 && (
          <ul className="dropdown-menu show">
            {searchData.documents.map((item, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => onClickAddressName(item)}
                >
                  {item.address_name}
                </button>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};
export default SearchLocation;
