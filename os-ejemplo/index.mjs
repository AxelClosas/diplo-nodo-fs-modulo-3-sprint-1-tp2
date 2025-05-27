import { info } from 'console'
import os from 'os'

// Obtener la arquitectura del sistema
console.log(`Arquitectura del Sistema: ${os.arch()}`)

// Obtener el tipo de sistema operativo
console.log(`Plataforma: ${os.platform()}`)

// Obtener la cantidad total de memoria
console.log(`Memoria Total: ${os.totalmem()}`)

// Obtener la memoria libre
console.log(`Memoria Libre: ${os.freemem()}`)

// Obtener la información del CPU
console.log(`Información del CPU: ${os.cpus()}`)
const infoCPU = os.cpus()

infoCPU.forEach(data => console.log(data))

/** Salida por consola
 * Arquitectura del Sistema: x64
 * Plataforma: win32
 * Memoria Total: 34081636352
 * Memoria Libre: 19718533120
 * Información del CPU: [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
 * {
  model: '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
  speed: 1690,
  times: { user: 341312, nice: 0, sys: 492718, idle: 4905203, irq: 134843 }
}
{
  model: '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
  speed: 1690,
  times: { user: 303890, nice: 0, sys: 194234, idle: 5241062, irq: 21625 }
}
{
  model: '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
  speed: 1690,
  times: { user: 457687, nice: 0, sys: 326515, idle: 4954984, irq: 23312 }
}
{
  model: '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
  speed: 1690,
  times: { user: 474734, nice: 0, sys: 185843, idle: 5078609, irq: 12937 }
}
{
  model: '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
  speed: 1690,
  times: { user: 532156, nice: 0, sys: 293765, idle: 4913265, irq: 19531 }
}
{
  model: '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
  speed: 1690,
  times: { user: 491718, nice: 0, sys: 227765, idle: 5019703, irq: 16625 }
}
{
  model: '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
  speed: 1690,
  times: { user: 545359, nice: 0, sys: 273250, idle: 4920578, irq: 18750 }
}
{
  model: '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
  speed: 1690,
  times: { user: 351203, nice: 0, sys: 197062, idle: 5190921, irq: 12609 }
}
 */