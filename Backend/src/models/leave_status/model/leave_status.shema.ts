import { required } from "joi";

export const leave_status = {
    personal_id: {type: 'INT',length: 10, required: false},
    full_name: {type: 'TINYTEXT', required: false},
    
}

export const Table_leave_status = "leave_status";