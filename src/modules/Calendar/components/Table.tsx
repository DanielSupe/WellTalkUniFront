import React from 'react';

interface Props {
  objet: any;
}

const Table = ({ objet }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-bgCalendar border-collapse border border-gray-200 dark:border-gray-600">
        <thead>
          <tr>
            {Object.keys(objet).map((key: any) => {
              if(objet[key]){
                return(
                  <th key={`${key}-encabezadoo`} className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 text-left text-gray-700 font-medium">
                  {key}
                </th>
                )
              }
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 dark:hover:bg-bgCalendar">
            {Object.keys(objet).map((key: any) => {
              if(objet[key])
                return(
                  <td key={key} className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-white">
                  {objet[key]}
                </td>)
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
