import fs from 'fs'

// Leer un archivo de manera asíncrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log('Contenido del archivo', data)
})

// Escribir un nuevo archivo
fs.writeFile('./data/newFile.txt', 'Contenido nuevo desde el modulo fs de Node.js', (err) => {
  if (err) throw err
  console.log('Archivo creado y escrito')
})

// Renombrar un archivo
fs.rename('./data/example.txt', './data/newExampleOrRenamedFile.txt', (err) => {
  if (err) throw err
  console.log('Archivo renombrado con exito')
})



/** Salida por consola
 * file:///C:/Users/DIREPI/Dev/diplo_nodo/modulo-backend/sprint-1/fs-ejemplo/index.mjs:5                                                  
  if (err) throw err                                                                                                                   
           ^

[Error: ENOENT: no such file or directory, open 'C:\Users\DIREPI\Dev\diplo_nodo\modulo-backend\sprint-1\fs-ejemplo\data\example.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\DIREPI\\Dev\\diplo_nodo\\modulo-backend\\sprint-1\\fs-ejemplo\\data\\example.txt'
}

Node.js v22.16.0
 * 
 */