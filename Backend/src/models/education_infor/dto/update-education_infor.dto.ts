import Joi from 'joi';

const UpdateEducationInforDto = Joi.object({
    education_id: Joi.number().required(),
    personal_id: Joi.number().required(),
    employee_id: Joi.number().required(),
    education_level: Joi.string().required(),
    university: Joi.string().required(),
    program: Joi.string().required(),
    previous_experience: Joi.string().required(),
    skills: Joi.string().required(),
   
});

export default UpdateEducationInforDto;
