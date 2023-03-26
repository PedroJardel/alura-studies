import React from "react";
import { Type } from "typescript";
import style from './Botao.module.scss'

//  propriedade children foi alterada desde a versão 17 do react, para solucionar o problema
//  temos que criar uma props children como se fosse um nó do componente (filho)
class Botao extends React.Component<{ children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        const { type="button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;