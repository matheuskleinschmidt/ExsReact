// 4. O que está sendo feito errado no trecho de código abaixo e por que não deve ser feito?


updateName() {
    let { name } = this.props;

    name = "Other name";
};

/* 
R:O problema é que ele tenta modificar uma propriedade (props) diretamente, o que não é permitido em React. Alterar uma (props) diretamente não terá
efeito no estado do componente assim causando possiveis bugs 
*/