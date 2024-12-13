import Joi from 'joi';

const CreateGenderDto = Joi.object({
    id_gender: Joi.number().required(),
    gender_name: Joi.string().required(),

});

export default CreateGenderDto;
