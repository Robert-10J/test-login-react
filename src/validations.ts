export const VALIDATION_LOGIN = {
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