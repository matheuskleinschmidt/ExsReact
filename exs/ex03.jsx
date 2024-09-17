// 3. Qual a má prática no código abaixo e o que valor do state “name” irá chegar no callback? O
// novo ou o antigo? Como deveria estar escrito este trecho de código?


updateMyState(myCallback) {
    this.setState({name: "First Name"}, myCallback(this.state.name));
    }

/*
R: myCallback está sendo chamado imediatamente, logo será passado o valor antigo
a correção ficaria assim:
*/

updateMyState(myCallback) {
    this.setState({ name: "First Name" }, () => {myCallback(this.state.name);});
}