import React, { useState } from 'react';
import ITarefa from '../../types/tarefa';
import Cronometro from '../Cronometro';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './App.module.scss'

const App = () => {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada);
  }
  return (
    <div className={style.AppStyle}>
      <Formulario  setTarefas={setTarefas} />
      <Lista
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro/>
    </div>
  ); 
}

export default App;
