function gerenciarAtendimento(pacientes, operacao, nomePaciente = null) {
    if (operacao === 'agendar') {
        if (nomePaciente) {
            pacientes.splice(pacientes.length, 0, nomePaciente);
        } else {
            console.log('Nome do paciente não fornecido para agendamento.');
        }
    } else if (operacao === 'atender') {
        if (pacientes.length > 0) {
            pacientes.splice(0, 1);
        } else {
            console.log('Não há pacientes na fila para atender.');
        }
    }

    console.log(pacientes.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

gerenciarAtendimento(pacientes, 'agendar', 'Mariana');
gerenciarAtendimento(pacientes, 'atender');
gerenciarAtendimento(pacientes, 'atender');
