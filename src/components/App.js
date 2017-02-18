import { h, Component } from 'preact'
import SearchBar from './SearchBar'
import SearchesList from './SearchesList'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      searches: []
    }
    this.addSearch = this.addSearch.bind(this)
  }

  addSearch ({search, results}) {
    this.setState((prevState) => {
      const { searches } = prevState
      searches.push({search, results})
      return {searches: searches}
    })
    console.table(this.state)
  }

  render (props, state) {
    return (
      <div>
        <SearchBar
          addSearch={this.addSearch}
        />
        <SearchesList
          searches={state.searches}
        />
      </div>
    )
  }
}
