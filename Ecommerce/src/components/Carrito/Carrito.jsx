import React, { useContext } from 'react'
import iphone from '../../assets/iPhone-14.jpg'
import 'boxicons'
import { DataContext } from '../context/DataProvider'




const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu


const tooglefalse = () =>{
    setMenu(false)
}

    
    const show1 = menu ?"carritoos  show" : "carritoos ";
    const show2 = menu ?"carriitoo show" : "carriitoo ";

    return (
        <>
            <div className={show1}>
                <div className={show2}>
                    <div className='carriitoo__close'onClick={tooglefalse} >
                    <box-icon name='x'></box-icon>
                    </div>
                    <h2 className='dos'>Su carrito</h2>
                    <div className='carriitoo_center'>


                        <div className='carriitoo_itemm'>
                            <img className='imagenn' src={iphone} />
                            <div>
                                <h3 className='tres'>iPhone 14 Plus - 128GB</h3>
                                <p className='pprice'>$5.673.000</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className='cantidad'>1</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className='remove_itemm'>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>

                        <div className='carriitoo_itemm'>
                            <img className='imagenn' src={iphone} />
                            <div>
                                <h3 className='tres'>iPhone 14 Plus - 128GB</h3>
                                <p className='pprice'>$5.673.000</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className='cantidad'>1</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className='remove_itemm'>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>

                        <div className='carriitoo_itemm'>
                            <img className='imagenn' src={iphone} />
                            <div>
                                <h3 className='tres'>iPhone 14 Plus - 128GB</h3>
                                <p className='pprice'>$5.673.000</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className='cantidad'>1</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className='remove_itemm'>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>

                        <div className='carriitoo_itemm'>
                            <img className='imagenn' src={iphone} />
                            <div>
                                <h3 className='tres'>iPhone 14 Plus - 128GB</h3>
                                <p className='pprice'>$5.673.000</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className='cantidad'>1</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className='remove_itemm'>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>

                        
                    <div className='carriitoo__footerrr'>
                        <h3 className='tre3'>Total: $2333</h3>
                        <button className='bbttnnn'>Comprar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrito