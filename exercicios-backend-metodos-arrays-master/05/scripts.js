function agendarPaciente(pacientes, novoPaciente) {
    pacientes.push(novoPaciente);
    console.log(pacientes.join(', '));
}

function atenderPaciente(pacientes) {
    if (pacientes.length > 0) {
        pacientes.shift();
    } else {
        console.log('Não há pacientes na fila para atender.');
    }
    console.log(pacientes.join(', '));
}

function cancelarAtendimento(pacientes, pacienteCancelar) {
    const index = pacientes.indexOf(pacienteCancelar);
    if (index !== -1) {
        pacientes.splice(index, 1);
    } else {
        console.log('Paciente não encontrado na fila.');
    }
    console.log(pacientes.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

console.log('Fila inicial:', pacientes.join(', '));
agendarPaciente(pacientes, 'Mariana');
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, 'Pedro');
