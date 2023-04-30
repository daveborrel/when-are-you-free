import axios from 'axios'
import React from 'react'

class App extends React.Component {

  state = { details: []}

componentDidMount() {

  let data;
  axios.get('http://127.0.0.1:8000/users/')
  .then(res => {
    data = res.data;
    this.setState({
      details: data
    })
  })
  .catch(err => { })
}

render () {
  return (
    <div>
    <h1>Data Generated from Django</h1>
    <hr></hr>
    {this.state.details.map((output, id) => (
      <div key={id}>
        <h2>{output.name}</h2>
      </div>
    ) )}
    </div>
  )
}

}

export default App;
