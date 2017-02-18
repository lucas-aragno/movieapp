import { h, Component } from 'preact'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      searches: []
    }
  }

  addSearch ({search, results}) {
    this.setState((prevState) => {
      const { searches } = prevState
      searches.push({search, results})
      return {searches: searches}
    })
  }

  render () {
    return (
      <div>
        Hi
      </div>
    )
  }
}
