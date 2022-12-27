import logo from '../../assets/images/logo.png'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { IconContext } from "react-icons";
import NavLinkMobile from "../NavLinkMobile";
import Botao from "../Botao";
import Carrinho from "../Carrinho"
import { FaBars } from "react-icons/fa";
import {useState} from 'react';


export default function HeaderMobile() {
        const[ hamburguer, setHamburguer]=useState(false);
        
        return (<div className={styles.headerMobileContainer}>

                <IconContext.Provider value={{ color: "rgb (102,102,102)", className: styles.hamburguer }}>
                        <FaBars className={styles.posicaoIconHamburguer} onClick={()=>{setHamburguer(!hamburguer)}}/>
                </IconContext.Provider>



                <div className={styles.imgContainer}>
                        <img src={logo} alt="Logo Digital College" className={styles.imagemLogo} />

                        <div className={styles.tituloLogo} >
                                <span>Digital Store</span>
                                <IconContext.Provider value={{ color: "rgb (102,102,102)", className: styles.icon }}>
                                        <CiSearch className={styles.posicaoIconSearch} />
                                </IconContext.Provider>

                        </div>
                        <div className={styles.Carrinho}>
                                <Carrinho />
                        </div>
                        <div className={styles.popHamburguer} style={hamburguer?{left:0}:{left:"-100vw"}} onClick={()=>{setHamburguer(false)}}>
                                <div className={styles.divNavLink}>
                                        <NavLinkMobile/>
                                </div>
                        </div>


                </div>

        </div>

        )

}