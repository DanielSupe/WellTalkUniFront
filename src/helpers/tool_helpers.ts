export function transformarCitas(listaCitas:any) {
    const userType = OptenerUserType().toLowerCase();
    return listaCitas.map((cita:any) => {
        return {
            title: `Cita con: ${cita[userType].name}`,
            date: cita.date,
            text:"PRUEBAS PARA VER COMO LLEGA ESTO"
        };
    });
}

export function procesarPsicologos(psicologos:any) {
    // Convertir el JSON a un objeto de JavaScript
  
    // Crear la lista de resultados
    const resultado = psicologos.map((psicologo:any) => ({
        label: psicologo.name,
        value: psicologo.id
    }));
  
    return resultado;
  }

  export function OptenerUserType() {
    const user = JSON.parse(localStorage.getItem("USER") || "{}")
    return user.userType;
  
  }