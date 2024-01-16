import React, { useState, useEffect } from 'react';
import EntityTable from '../../components/EntityList/EntityTable';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import EntityModal from '../../components/EntityList/EntityModal';
import EntityModalDelete from '../../components/EntityList/EntityModalDelete';
import {Entity} from '../../interfaces/Entity'
import { getEntities } from '../../services/entityServices';
import './EntitiesList.css'

const EntitiesList: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState({open: false, typeAction:''});
  const [isModalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false)
  const [listEntities, setListEntities] = useState<Entity[]>([])
  const [listSelectedEntities, setListSelectedEntities] = useState<Entity[]>([])
  const [selectedRow, setSelectedRow] = useState<Entity>({id:0, name: '', description: ''});
  const [search, setSearch] = useState<string>('')

  const handleFetchEntities = async (search: string) => {
    try{
      const res = await getEntities(search)
      setListEntities(res)
    } catch (e) {
    }
  };

  useEffect(() => {
    handleFetchEntities(search);
  }, [search]);

  const handleAddNewEntity = () => {
    setModalOpen({open: true, typeAction:'add'})
  }

  const handleDeleteEntity = () => {
    setModalDeleteOpen(true)
  }

  return(
    <>
      <div className='entitiesList-base-container'>
        <div className='entitiesList-header'>
          <div className='entitiesList-header-left'>
            <div className='entitiesList-header-title'>Listado de Entidades</div>
            <TextField 
              id="outlined-search" 
              label="Buscar..." 
              type="search"
              size='small' 
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='entitiesList-header-icons'>
            <Tooltip title="Agregar entidad">
              <IconButton onClick={handleAddNewEntity}>
                <AddCircleOutlinedIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Eliminar entidad">
              <IconButton onClick={handleDeleteEntity}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className='entitiesList-table'>
          <EntityTable 
            entities={listEntities}
            setListSelectedEntities={setListSelectedEntities}
            setModalOpen={setModalOpen}
            setSelectedRow={setSelectedRow}
          />
        </div>
      </div>
      {isModalOpen.open &&
        <EntityModal 
          type={isModalOpen.typeAction} 
          onClose={()=>{
            setModalOpen({open: false, typeAction:''})
            handleFetchEntities(search)
          }}
          selectedRow={selectedRow}
        />
      }
      {isModalDeleteOpen &&
        <EntityModalDelete 
          entities={listSelectedEntities} 
          onClose={()=>{
            handleFetchEntities(search)
            setModalDeleteOpen(false)
          }}
        />
      }
    </> 
  )
};

export default EntitiesList;
