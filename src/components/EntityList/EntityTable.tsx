import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {Entity} from '../../interfaces/Entity'


interface EntityTableProps {
  entities: Entity[];
  setListSelectedEntities: React.Dispatch<React.SetStateAction<Entity[]>>;
  setModalOpen: React.Dispatch<React.SetStateAction<{open: boolean; typeAction: string; }>>
  setSelectedRow: React.Dispatch<React.SetStateAction<Entity>>;
}

const EntityTable: React.FC<EntityTableProps> = ({ 
  entities, 
  setListSelectedEntities, 
  setModalOpen,
  setSelectedRow
}) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'description', headerName: 'Description', width: 200 },
    {
      field: 'editButton',
      headerName: '',
      sortable: false,
      width: 100,
      renderCell: (params:any) => (
        <IconButton
          onClick={() => {
            handleEditButtonClick(params.id)
            setSelectedRow({id:params.id, name: params.row.name, description: params.row.description})
          }}
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ]

  const handleEditButtonClick = (entityId: number) => {
    setModalOpen({open: true, typeAction: 'edit'})
  };

  const handleSelectionModelChange = (newSelectionModel: any) => {
    // Obtener las entidades seleccionadas usando los IDs de las filas seleccionadas
    const selectedEntities = entities.filter((entity) => newSelectionModel.includes(entity.id));
    // Actualizar el estado de las entidades seleccionadas
    setListSelectedEntities(selectedEntities);
  };

  return <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={entities}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </div>
};

export default EntityTable;

