import { render } from 'preact'
import App from './components/App'

document.addEventListener('DOMContentLoaded', event => (
 render(<App />, document.getElementById('root'))
))
