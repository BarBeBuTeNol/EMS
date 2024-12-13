import Joi from 'joi';

const UpdateEmploymentTypeDto = Joi.object({
    id_employment_type: Joi.number().required(),
    employment_name: Joi.string().required(),
   
});

export default UpdateEmploymentTypeDto;
