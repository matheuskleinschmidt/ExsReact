// 7. Esse componente abaixo gera um erro no console ao renderizar, corrija a implementação
// para que não gere mais erro

function MyCmp(props) {
  const data = ["item1", "item2", "item3"];
  return (
    <ul>
      {data.map((item: string) => (<li>{item}</li>))}
    </ul>
  );
}

/*
o erro é que está faltando uma chave key unicá para cada item, a correção do .map fica assim
*/

<ul>
  {data.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>;
