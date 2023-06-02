import React from 'react'
import iphone from '../../assets/iPhone-14.jpg'
import arrow from '../../assets/up-arrow.svg'


const Carrito = () => {
    return (
        <>
            <div className='carritoos '>
                <div className='carriitoo '>
                    <div className='carriitoo_close'>
                        <box-icon name="x">x</box-icon>
                    </div>
                    <h2 className='dos'>Su carrito</h2>
                    <div className='carriitoo_center'>


                        <div className='carriitoo_itemm'>
                            <img src={iphone} />
                            <div>
                                <h3>title</h3>
                                <p className='pprice'>$5.673.000</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className='Cantidad'>1</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className='remove_itemm'>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>
                    </div>
                    <div className='carriitoo__footerrr'>
                        <h3>Total: $2333</h3>
                        <button className='bbttnnn'>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrito