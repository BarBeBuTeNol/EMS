import { required } from "joi";

export const leave_type = {
    personal_id: {type: 'INT',length: 10, required: false},
    full_name: {type: 'TINYTEXT',length:70, required: false},
    
}

export const Table_leave_type = "leave_type";