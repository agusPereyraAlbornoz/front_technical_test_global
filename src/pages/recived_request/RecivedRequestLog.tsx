import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { DataGrid } from '@mui/x-data-grid';
import {RequestReceived} from '../../interfaces/RequestReceived'
import { getRequests } from '../../services/requestServices';
import './RecivedRequestLog.css'


const RecivedRequestLog: React.FC = () => {
    const columns = [
        { field: 'method', headerName: 'Method', width: 70 },
        { field: 'url', headerName: 'URL', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
        { 
            field: 'elapsed', 
            headerName: 'Time', 
            width: 200, 
            valueGetter: (params:any) => `${params.value}ms` 
        },
        { 
            field: 'date', 
            headerName: 'Fecha y Hora', 
            width: 200,
            valueGetter: (params:any) => moment(params.value).format('YYYY-MM-DD HH:mm:ss'), },
    ]
    const [listRequest, setListRequest] = useState<RequestReceived[]>([])

    const handleFetchRequest = async () => {
        try{
            const res = await getRequests()
            setListRequest(res);
        } catch (e) {}
    };

    useEffect(() => {
        handleFetchRequest();
      }, []);

  return(
    <>
    <div className='recivedRequest-base-container'>
        <div className='recivedRequest-header'>
            <div className='recivedRequest-header-title'>Solicitudes recibidas</div>
        </div>
        <div className='recivedRequest-table'>
            <DataGrid
                rows={listRequest}
                columns={columns}
            />
        </div>
    </div>
    </> 
  )
};

export default RecivedRequestLog;