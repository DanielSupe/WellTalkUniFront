export function transformarCitas(listaCitas:any) {
    return listaCitas.map((cita:any) => {
        return {
            title: `Cita con: ${cita.psychologist.name}`,
            date: cita.date
        };
    });
}