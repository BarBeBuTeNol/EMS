import { required } from "joi";

export const education_infor = {
    education_id: {type: 'INT',length: 10, required: false},
    personal_id: {type: 'INT',length: 10, required: false},
    employee_id: {type: 'INT',length: 10, required: false},
    education_level: {type: 'TEXT', required: false},
    university: {type: 'VARCHAR',length: 100, required: false},
    program: {type: 'VARCHAR',length: 100, required: false},
    previous_experience: {type: 'VARCHAR',length: 100, required: false},
    skills: {type: 'VARCHAR',length: 100, required: false},
    
}

export const Table_education_infor = "employment_education_info";