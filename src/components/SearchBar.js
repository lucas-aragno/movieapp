import { h, Component } from 'preact'
import request from 'superagent'

export default class SearchBar extends Component {

  constructor () {
    super()
    this.doSearch = this.doSearch.bind(this)
  }

  doSearch () {
    const { addSearch } = this.props
    const { text } = this.state
    const url = `http://api.tvmaze.com/search/shows?q=${text}`
    if ('caches' in window) {
      console.warn('TIENE CACHE')
      caches.match(url).then((res, err) => {
        if(res) {
          res.json().then((json) => {
            addSearch({
              search: text,
              results: json
            })
          })
        }
      })
    }
    request
      .get(url)
      .end((err, res) => {
        if (!err) {
          addSearch({
            search: text,
            results: res.body
          })
        } else {
          console.error('Something is wrong with the API :(')
        }
      })
  }

  render (props, {text}) {
    return (
      <div>
        <input value={text} onInput={this.linkState('text')} />
        <button onClick={this.doSearch}>
          Search
        </button>
      </div>
    )
  }
}
