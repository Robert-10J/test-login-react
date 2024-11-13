export const VALIDATION = {
  email: {
    required: 'El email es requerido',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'El email no es válido'
    }
  },
  password: {
    required: 'La contraseña es requerida',
  }
}

export const VALIDATION_REGISTER = {
  name: {
    required: 'Su nombre es requerido',
  },
  username: {
    required: 'Su nombre de usuario es requerido'
  },
  email: {
    required: 'El email es requerido',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'El email no es válido'
    }
  },
  password: {
    required: 'La contraseña es requerida',
    minLength: {
      value: 6,
      message: 'El password debe tener al menos 6 caracteres'
    }
  }
}