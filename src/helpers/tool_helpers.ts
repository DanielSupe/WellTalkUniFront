export function transformarCitas(listaCitas:any) {
    const userType = OptenerUserType().toLowerCase();
    const userPerfil = changeUser(userType);
    console.log(listaCitas,"listCita")
    return listaCitas.map((cita:any) => {
        return {
            title: `Cita con: ${cita[userPerfil].name} ${cita[userPerfil].lastName} ${cita[userPerfil].phoneNumber}`,
            date: cita.date,
            status: cita.status,
            perfilType:userPerfil,
            perfil:{
                name: cita[userPerfil].name,
                lastName: cita[userPerfil].lastName,
                career: cita[userPerfil].career,
                semester: cita[userPerfil].semester,
                phoneNumber: cita[userPerfil].phoneNumber,
                address: cita[userPerfil].address,
                university:cita[userPerfil].university,
                dateOfBirth: cita[userPerfil].dateOfBirth,
                specialty:cita[userPerfil].specialty,
                yearsExperience:cita[userPerfil].yearsExperience,
            }
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

   function changeUser(user:string) {
    switch(user){
        case "student":
            return "psychologist"
        case "psychologist":
            return "student"
        default:
            return ""
    }
  }
  