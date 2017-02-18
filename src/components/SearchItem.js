import { h, Component } from 'preact'

const SearchItem = ({
  search
}) => (
  <div>
    <h1> {search.search} </h1>
    <ul>
      {
        search.results.map(({show}) => (
          <li>
            <h5> {show.name} </h5>
            <img src={show.image.medium} />
            <div dangerouslySetInnerHTML={{__html: show.summary}} />
          </li>
        ))
      }
    </ul>
  </div>
)

export default SearchItem
