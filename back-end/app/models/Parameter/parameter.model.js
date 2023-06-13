const Joi = require('joi')
const BaseModel = require('../../utils/base-model.js')

module.exports = new BaseModel('Parameter', {
    size: Joi.number().required(),
    music: Joi.boolean().required(),
    nameMusicPicture: Joi.string().required(),
}
)
