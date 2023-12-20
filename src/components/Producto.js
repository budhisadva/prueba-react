import { Component } from 'react'
import Button from './Button'

const styles = {
  producto: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '20%',
    padding: '10px 15px',
    borderRadius: '5px'
  },
  img: {
    width: '100%',
    height: '200px'
  }
}

class Producto extends Component {
  render() {
    let { producto, agregarAlCarro } = this.props;
    return (
      <div style={styles.producto}>
        <h3>{producto.name}</h3>
        <img style={styles.img} alt={producto.name} src={producto.img}/>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
        Agregar al carro
        </Button>
      </div>
    )
  }
}

export default Producto;
