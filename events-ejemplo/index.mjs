import { EventEmitter } from 'events'

// Crear una instancia de EventEmitter
const emisor = new EventEmitter()

// Definir un evento personalizado
emisor.on('saludo', (nombre) => {
  console.log(`Hola ${nombre}, mucho gusto.`)
})

// Emitir el evento 'saludo'
emisor.emit('saludo', 'Axel')

/** Salida por consola
 * 
 * Hola Axel, mucho gusto.
 */

