import { Employee } from "@/types/types";

export default function UserGridRow({ employee }: {employee: Employee}) {
  return (
    <tr key={`${employee['Nombre']}-${employee['Apellido']}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center text-gray-900">{employee['legajo']}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center text-gray-900" >{employee['Nombre']}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{employee['Apellido']}</div>
      </td>
    </tr>
  )
}
