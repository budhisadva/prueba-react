import { Component } from 'react'
import Producto from './Producto'

const styles = {
  productos: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
}

class Productos extends Component {
  render() {
    let { productos, agregarAlCarro } = this.props;
    return (
      <div style={styles.productos}>
        {productos.map(producto =>
        <Producto
          agregarAlCarro={agregarAlCarro}
          key={producto.name}
          producto={producto}
        />)}
      </div>
    )
  }
}

export default Productos;
