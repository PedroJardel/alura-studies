import style from '../Lista.module.scss'

// A criação do componente Item adere ao SRP Single Responsibility Principle
// DRY Don't Repeat Yourself => evita repetição de código
export default function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}