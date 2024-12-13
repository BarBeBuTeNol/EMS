import Joi from 'joi';

const UpdateGenderDto = Joi.object({
    id_gender: Joi.number().required(),
    gender_name: Joi.string().required(),
   
});

export default UpdateGenderDto;
