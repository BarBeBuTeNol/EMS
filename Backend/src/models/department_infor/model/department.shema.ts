import { required } from "joi";

export const employment_type = {
    id_department: {type: 'INT',length: 10, required: false},
    department_name: {type: 'VARCHAR',length: 100, required: false},
    
}

export const Table_department = "department";