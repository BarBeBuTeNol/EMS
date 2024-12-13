import Joi from 'joi';

const UpdateDepartmentDto = Joi.object({
    id_department: Joi.number().required(),
    department_name: Joi.string().required(),
   
});

export default UpdateDepartmentDto;
