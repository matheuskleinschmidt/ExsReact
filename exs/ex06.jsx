// 6. No trecho de código abaixo, a função asyncFunc é assincrona. O que falta para que este
// código funcione corretamente?


callAsyncFunction (asyncFunc) {
    const value =  asyncFunc();
    this.setState({ value });
}

//R: é necessário tornar a função assíncrona  , colocando um await para esperar a asyncFunc() e colocar um async para tornar a callAsyncFunction assíncrona 

async callAsyncFunction (asyncFunc) {
    const value = await asyncFunc();
    this.setState({ value });
}