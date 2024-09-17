//2. Por que o método setState não irá funcionar? O que é necessário para que funcione?

constructor (props){
    super(props);
}


updateMyState(myCallback) {
this.setState({ name: "nyName" });
}

/*
R: setState não irá porque o método updateMyState não está vinculado ao contexto correto da classe.
Para que funcione é preciso garantir que o método updateMyState tenha o contexto correto da instância da classe.
*/