import { useState } from 'react'
import { cites, stateTypes } from '../../utils/enumsParser';

type FilterPostsTypes = {
  handleFilter: (e: React.FormEvent<HTMLFormElement>, typeFilter: string, cityFilter: string, priceFilter: string) => void;
  defaultTypeFilter: string
}

function FilterPosts({ handleFilter, defaultTypeFilter }: FilterPostsTypes) {

  const [typeFilter, setTypeFilter] = useState(defaultTypeFilter);
  const [cityFilter, setCityFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  return (
    <form className="my-5 flex gap-5 flex-wrap items-end" onSubmit={(e) => (handleFilter(e, typeFilter, cityFilter, priceFilter))}>
      <label className="flex flex-col">
        <span>State Type</span>
        <select value={typeFilter} onChange={e => {
          if (e.target.value == 'any') {
            setTypeFilter("")
          } else {
            setTypeFilter(e.target.value)
          }
        }} className="outline-none border-2 border-black p-2">
          <option value='any'>Any</option>
          {Object.keys(stateTypes).map((typeId) => (
            <option key={typeId} value={typeId}>{stateTypes[typeId as keyof typeof stateTypes]}</option>
          ))}

        </select>
      </label>
      <label className="flex flex-col">
        <span>City</span>
        <select value={cityFilter} onChange={e => {
          if (e.target.value == 'any') {
            setCityFilter("")
          } else {
            setCityFilter(e.target.value)
          }
        }} className="outline-none border-2 border-black p-2">
          <option value='any'>Any</option>
          {Object.keys(cites).map((cityId) => (
            <option key={cityId} value={cityId}>{cites[cityId as keyof typeof cites]}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col">
        <span>Order by</span>
        <select value={priceFilter} onChange={e => {
          if (e.target.value == 'any') {
            setPriceFilter("")
          } else {
            setPriceFilter(e.target.value)
          }
        }} className="outline-none border-2 border-black p-2">
          <option value='any'>Any</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </label>
      <button className="btn">Filter</button>
    </form>
  );
}

export default FilterPosts;
