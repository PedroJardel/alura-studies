import React from "react";
import style from './Botao.module.scss'

//  propriedade children foi alterada desde a versão 17 do react, para solucionar o problema
//  temos que criar uma props children como se fosse um nó do componente (filho)
class Botao extends React.Component<{children?: React.ReactNode}> {
    render(){
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;