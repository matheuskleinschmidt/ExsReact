// 5. Corrija o trecho de código abaixo para que o state “count” seja atualizado quando o
// componente montar:

const MyFuncComponent = () => {
  const [count, updateCount] = useState(0);

  useEffect(() => {
    updateCount(count + 1);
  });
  return <div>{count}</div>;
};

//R:

const MyFuncComponent = () => {
    const [count, updateCount] = useState(0);
  
    useEffect(() => {
      updateCount(count + 1);
    }, []); // aqui
    return <div>{count}</div>;
  };
