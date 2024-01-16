import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {Entity} from '../../interfaces/Entity'
import { deleteEntity } from '../../services/entityServices';
import './EntityModalDelete.css'

  
  interface EntityModalDeleteProps {
    entities: Entity[];
    onClose: () => void;
  }

const EntityModalDelete: React.FC<EntityModalDeleteProps> = ({ entities, onClose }) => {

    const [isLoading, setIsLoading] = useState(false)
    const textHeader = entities.length > 1 ? 'Eliminar Entidades' : 'Eliminar Entidad'
    const textBody = entities.length > 1 ? ' entidades' : ' entidad' 
    
    const handleCancel = () => {
        onClose();
    };

    const handleDelete = async () => {
        try{
            setIsLoading(true)
            deleteEntity(entities).finally(()=>{
                setIsLoading(false)
                onClose();
            })
        } catch (e) {
        }
    };

    return (
    <Modal open={true} onClose={onClose}>
        <div className='entity-modal-container'>
            <div className='entity-modal-header'>{textHeader}</div>
            <div className='entity-modal-body'>
                ¿Estas seguro que deseas eliminar {entities.length} {textBody} ? 
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
                    onClick={handleDelete} 
                    variant="contained" 
                    color="primary"
                    disabled={isLoading}
                >
                    {isLoading ? <CircularProgress size={24} /> : 'Eliminar'}
                </Button>
            </div>
        </div>
    </Modal>
    );
};

export default EntityModalDelete;