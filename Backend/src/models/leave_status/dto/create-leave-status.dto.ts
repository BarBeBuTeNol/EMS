import Joi from 'joi';

const CreateLeaveStatusDto = Joi.object({
    id_leave_status: Joi.number().required(),
    leave_status: Joi.string().required(),

});

export default CreateLeaveStatusDto;
