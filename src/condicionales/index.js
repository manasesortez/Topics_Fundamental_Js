  
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
  }
  
  function imprimirProfesiones(persona) {
    console.log(`${persona.nombre}:`)
  
    if (persona.ingeniero) {
      console.log('Es Ingeniero')
    } else {
      console.log('No es ingeniero')
    }

    
  
    if (persona.cocinero) {
      console.log('Es  Cocinero')
    }
  
    if (persona.dj) {
      console.log('Es DJ')
    }
  
    if (persona.cantante) {
      console.log('Es Cantante')
    }
  
    if (persona.guitarrista) {
      console.log('Gutiarrista')
    }
  
    if (persona.drone) {
      console.log('Es Piloto de drone')
    }
  
  }
  
  imprimirProfesiones(sacha)