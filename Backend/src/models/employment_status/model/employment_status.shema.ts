import { required } from "joi";

export const employment_type = {
    id_employment_status: {type: 'INT',length: 10, required: false},
    employment_status: {type: 'TINYTEXT', required: false},
    
}

export const Table_employment_status = "employment_status";