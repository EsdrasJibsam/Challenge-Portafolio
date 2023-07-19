export function valida(input) {
    const tipoInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input.message-error').innerHTML =
            '';
    } else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML =
            mostrarMensajeDeError(tipoInput, input);
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
];

const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacío',
    },
    email: {
        valueMissing: 'El campo correo no puede estar vacío',
        typeMismatch: 'El correo no es válido',
    },
    asunto: {
        valueMissing: 'El campo asunto no puede estar vacío',
        patternMismatch: 'Debe de contener al menos 10 caracteres',
    },
    mensaje: {
        valueMissing: 'Este campo no puede estar vacío',
        patternMismatch:
            'Debes de hacer una breve descripcion del servicio que necesitas',
    },
};

function mostrarMensajeDeError(tipoInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoInput][error]);
            mensaje = mensajesDeError[tipoInput][error];
        }
    });
    return mensaje;
}
