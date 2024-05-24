export const fetchCities = async (id:string) => {
    try {
      const response = await fetch(`https://api-colombia.com/api/v1/Department/${id}/cities`);
      if (!response.ok) {
        throw new Error('Error al obtener las ciudades');
      }
      const data = await response.json();
      const transformedData = data.map((department:any) => ({
        value: department.id,
        label: department.name
      })).sort((a:any, b:any) => {
        return a.label.localeCompare(b.label); // Orden alfabético por el nombre de la ciudad
      });
      return transformedData
    } catch (error) {
      console.error('Error:', error);
    }
};



export const fetchDataDepartaments = async () => {
    try {
      const response = await fetch('https://api-colombia.com/api/v1/Department');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      // Transformar los datos según lo solicitado
      const transformedData = data.map((department:any) => ({
        value: department.id,
        label: department.name
      })).sort((a:any, b:any) => {
        return a.label.localeCompare(b.label); // Orden alfabético por el nombre del departamento
      });
      // Establecer los datos transformados en el estado
      return transformedData
    } catch (error) {
      console.error('Error:', error);
    }
};


export function procesarPsicologos(jsonData:any) {
  // Convertir el JSON a un objeto de JavaScript
  const psicologos = JSON.parse(jsonData);

  // Crear la lista de resultados
  const resultado = psicologos.map((psicologo:any) => ({
      label: psicologo.name,
      value: psicologo.id
  }));

  return resultado;
}
