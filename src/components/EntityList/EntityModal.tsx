import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {Entity} from '../../interfaces/Entity'
import { createEntity, editEntity } from '../../services/entityServices';
import './EntityModal.css'


interface EntityModalProps {
  type: string;
  onClose: () => void;
  selectedRow: Entity; 
}

const EntityModal: React.FC<EntityModalProps> = ({ type, onClose, selectedRow }) => {
  const [name, setName] = useState<string>(type === 'add' ? '' : selectedRow.name);
  const [description, setDescription] = useState<string>(type === 'add' ? '' : selectedRow.description);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const textHeader = type === 'add' ? 'Agregar entidad' : 'Editar entidad'
  const textButton = type === 'add' ? 'Agregar' : 'Aceptar'

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      if (type === 'add') {
        await createEntity(name, description);
      } else {
        await editEntity(selectedRow.id, name, description);
      }
    
    } catch (e){

    } finally {
      setIsLoading(false);
      onClose();
    }
  };
  return (
    <Modal open={true} onClose={onClose}>
      <div className='entity-modal-container'>
        <div className='entity-modal-header'>{textHeader}</div>
        <div className='entity-modal-body'>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            className='entity-modal-textfield'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Descripción"
            variant="outlined"
            fullWidth
            className='entity-modal-textfield'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='entity-modal-buttons'>
          <Button 
            onClick={handleCancel} 
            variant="contained" 
            disabled={isLoading}
            sx={{ mr: 2 }}
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleConfirm} 
            variant="contained" 
            color="primary"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : textButton}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EntityModal;
