import { Component } from 'react'

const styles = {
  title: {
    maginBottom: '30px',
  }
}

class Title extends Component {
  render() {
    return (
      <h1 style={styles.title} >Tienda</h1>
    )
  }
}

export default Title;
