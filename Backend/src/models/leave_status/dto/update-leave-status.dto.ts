import Joi from 'joi';

const UpdateLeaveStatusDto = Joi.object({
    id_leave_status: Joi.number().required(),
    leave_status: Joi.string().required(),
   
});

export default UpdateLeaveStatusDto;
