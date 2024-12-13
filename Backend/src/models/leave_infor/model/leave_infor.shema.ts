import { required } from "joi";

export const leave_infor = {
    personal_id: {type: 'INT',length: 10, required: false},
    full_name: {type: 'TINYTEXT', required: false},
    
}

export const Table_leave_infor = "leave_infor";