import React from 'react';
import Carta from './Carta';
function App() {
  return (
    <div>
      <Carta Me={'Mensual'} Pre2={'20$'}></Carta>
      <Carta Me={'Anual'} Pre2={'100$'}></Carta>
      <Carta Me={'Semanal'} Pre2={'2$'}></Carta>
    </div>
  );
}

export default App;
