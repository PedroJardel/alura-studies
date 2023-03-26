import React from "react";
import { Type } from "typescript";
import style from './Botao.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}
//  propriedade children foi alterada desde a versão 17 do react, para solucionar o problema
//  temos que criar uma props children como se fosse um nó do componente (filho)
const Botao = ({ onClick, type, children }: Props) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}>
            {children}
        </button>
    )
}

export default Botao; 