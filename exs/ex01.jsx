//1. Qual é a má prática no código abaixo e como melhorar este trecho de código?

updateMyState(){
    this.setState({name: "First Name"})
    this.setState({lastName: "Last Name"})
    this.setState({age: 31})
}

//R: o uso repetido de setState , que pode causar múltiplas renderizações desnecessárias