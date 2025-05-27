import { log } from 'console'
import path, { dirname } from 'path'

// Ruta de archivo de ejemplo
const filePath = '/data/example.txt'

// Obtener el directorio base (Desde donde se ejecuta el archivo)
const dirName = path.dirname(filePath)
console.log(`Directorio Base: ${dirName}`)

// Obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt')
console.log(`Nombre del archivo: ${baseName}`)

// Obtener la extensión del archivo
const extName = path.extname(filePath)
console.log(`Extensión del archivo: ${extName}`)

// Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt')
console.log(`Nueva ruta: ${newPath}`)

/** Salida por Consola
 * Directorio Base: /data
 * Nombre del archivo: example
 * Extensión del archivo: .txt
 * Nueva ruta: \user\docs\newfile.txt
*/

