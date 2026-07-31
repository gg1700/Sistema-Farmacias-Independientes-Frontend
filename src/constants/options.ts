import { MdGroupAdd } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { MdDocumentScanner } from "react-icons/md";
import { MdPlaylistAddCircle } from "react-icons/md";
import { RiFileSearchFill } from "react-icons/ri";

export const optionList = [
  { id: 1, IconName: MdGroupAdd, description: "Registrar Proveedores", path: "/suppliers/register"},
  { id: 2, IconName: MdPersonSearch, description: "Buscar Proveedor", path: "/suppliers/manage"},
  { id: 3, IconName: MdContactPage, description: "Reportes de Proveedores Existentes", path: "/reports/suppliers"},
  { id: 4, IconName: MdAssignmentAdd, description: "Registrar Solicitud de Insumos", path: "/supply-requests/register"},
  { id: 5, IconName: MdDocumentScanner, description: "Reportes de Solicitudes de Insumos", path: "/reports/requests"},
  { id: 6, IconName: RiFileSearchFill, description: "Ver Categorias de Insumos", path: "/inventory/categories"},
  { id: 7, IconName: MdPlaylistAddCircle, description: "Registrar Categorias de Insumos", path: "/supply-categories/register"},
];