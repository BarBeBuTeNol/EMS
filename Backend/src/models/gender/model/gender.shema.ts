import { required } from "joi";

export const gerder = {
    id_gender: {type: 'INT',length: 10, required: false},
    gender_name: {type: 'TINYTEXT', required: false},
    
}

export const Table_gender = "gender";