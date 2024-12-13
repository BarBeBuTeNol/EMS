import { required } from "joi";

export const employment_type = {
    id_gender: {type: 'INT',length: 10, required: false},
    gender_name: {type: 'TINYTEXT', required: false},
    
}

export const Table_employment_type = "employment_type";