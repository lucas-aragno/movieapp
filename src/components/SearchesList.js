import { h, Component } from 'preact'
import SearchItem from './SearchItem'

const SearchesList = ({
  searches
}) => (
  <div>
    {
      searches.map((search) =>
        <SearchItem search={search} />)
    }
  </div>
)

export default SearchesList
