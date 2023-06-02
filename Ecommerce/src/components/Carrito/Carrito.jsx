import React, { useContext } from 'react'
import iphone from '../../assets/iPhone-14.jpg'
import 'boxicons'
import { DataContext } from '../context/DataProvider'




const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total ] = value.total;


const tooglefalse = () =>{
    setMenu(false)
}

    
    const show1 = menu ?"carritoos  show" : "carritoos ";
    const show2 = menu ?"carriitoo show" : "carriitoo ";

    const resta = id=>{
        carrito.forEach(item=>{
            if(item.id===id){
                item.cantidad===1 ?item.cantidad = 1 : item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }

    const suma =id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad +=1;
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto = id =>{
        if(window.confirm("¿Quiere eliminar el producto ")){
            carrito.forEach((item, index)=>{

                if(item.id===id){
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }
            })
            setCarrito([...carrito])
        }
    }


    return (
        <>
            <div className={show1}>
                <div className={show2}>
                    <div className='carriitoo__close'onClick={tooglefalse} >
                    <box-icon name='x'></box-icon>
                    </div>
                    <h2 className='dos'>Su carrito</h2>

                    <div className='carriitoo_center'>
                {

                    carrito.length === 0 ?<h2 style={{textAlign: "center", fontSize: "3rem"}}> Carrito Vacio</h2> :<>

                    {
                    carrito.map((producto)=>(

                 


                        <div className='carriitoo_itemm' key={producto.id}>
                            <img className='imagenn' src={producto.img} />
                            <div>
                                <h3 className='tres'>{producto.title}</h3>
                                <p className='pprice'>${producto.price}</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid" onClick={()=>suma(producto.id)} ></box-icon>
                                <p className='cantidad'>{producto.cantidad}</p>
                                <box-icon name="down-arrow" type="solid" onClick={()=>resta(producto.id)}></box-icon>
                            </div>
                            <div className='remove_itemm' onClick={()=>removeProducto(producto.id)}>
                                <box-icon name="trash" ></box-icon>
                            </div>
                        </div>

                        ))
                }
                </>
                }


                        
                    <div className='carriitoo__footerrr'>
                        <h3 className='tre3'>Total: ${total}</h3>
                        <button className='bbttnnn'>Comprar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrito