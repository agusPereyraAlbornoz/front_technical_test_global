import axios from 'axios';
import { toast } from 'react-toastify';
import { Entity } from '../interfaces/Entity';

export const getEntities = async (search: string) => {
    try {
      const response = await axios.get('http://localhost:3001/api/entities', {
        params: { search }
      });
      return response.data
    } catch (error: any) {
        toast.error(`Error: ${error.response.data.error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        throw error;
      }
  };

export const deleteEntity = async(entities: Entity[]) => {
    try{
        const entityIds = entities.map(entity => entity.id);
        await axios.delete('http://localhost:3001/api/deleteEntities', {
            data: entityIds
        });
        toast.success('Proceso completado con exito', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } catch (error:any) {
        toast.error(`Error: ${error.response.data.error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        throw error;
    }
}

export const createEntity = async (nameEntity: string, descriptionEntity: string) => {
    try {
        await axios.post('http://localhost:3001/api/createEntity', {
            name: nameEntity,
            description: descriptionEntity,
        });
        toast.success('Entidad creada con exito', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } catch (error: any) {
        toast.error(`Error: ${error.response.data.error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        throw error;
    }
};

export const editEntity = async (id: number, nameEntity: string, descriptionEntity: string) => {
    try {
        await axios.put(`http://localhost:3001/api/editEntity/${id}`, {
            name: nameEntity,
            description: descriptionEntity,
        });
        toast.success('Entidad editada con exito', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } catch (error: any) {
        toast.error(`Error: ${error.response.data.error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        throw error;
    }
};