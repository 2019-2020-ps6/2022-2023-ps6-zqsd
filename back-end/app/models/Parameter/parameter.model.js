const Joi = require('joi')
const BaseModel = require('../../utils/base-model.js')

const Parameter = new BaseModel('Parameter', {
    size: Joi.number().required(),
    music: Joi.boolean().required(),
    nameMusicPicture: Joi.string().required(),
    selectedMusic: Joi.string().required(),
}
)

module.exports = {
    Parameter,
}

