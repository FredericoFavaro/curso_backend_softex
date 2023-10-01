enum testuserType {
    Administrador,
    Aluno,
    Visitante
};

function login(usuario:testuserType): void {
    if (usuario === testuserType.Administrador){
        console.log(`Você logou como ${testuserType.Administrador}`);
    } else if (usuario === testuserType.Aluno) {
        console.log(`Bem vindo ${testuserType.Aluno}.\nVocê tem acesso ao módulo de aulas`);
    } else {
        console.log(`Bem vindo ${testuserType.Visitante}, você não tem acesso a nenhum módulo`);
    }
}

//login();