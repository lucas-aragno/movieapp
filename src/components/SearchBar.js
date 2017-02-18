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
    request
      .get(`http://api.tvmaze.com/search/shows?q=${text}`)
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
