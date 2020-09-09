
const Joi = require('@hapi/joi')

const nocSchema = {

    /**
     * noc details schema for validation
     */
    noc: () => {
        return Joi.object({
            applicant_type: Joi.string().required(),
            applicant_name: Joi.string().required(),
            relationship_type: Joi.string().required(),
            relationship_name: Joi.string().required(),
            industry: Joi.string().required(),
            address: Joi.string().required(),
            state: Joi.string().required(),
            pin: Joi.number().required(),
            mobile: Joi.string().required(),
            email: Joi.string().required(),
            aadhaar: Joi.number().required(),
            city: Joi.string().required(),
            arc_consultant_type: Joi.string().required(),
            arc_license: Joi.string().required(),
            arc_name: Joi.string().required(),
            arc_address: Joi.string().required(),
            arc_mobile: Joi.string().required(),
            arc_email: Joi.string().required(),
            struct_consultant_type: Joi.string().required(),
            struct_name: Joi.string().required(),
            struct_address: Joi.string().required(),
            validity: Joi.string().required(),
            clct_consultant_type: Joi.string().required(),
            clct_name: Joi.string().required(),
            clct_address: Joi.string().required(),
            clct_mobile: Joi.string().required(),
            clct_email: Joi.string().required(),
            plot_no: Joi.string().required(),
            plot_street: Joi.string().required(),
            plot_colony: Joi.string().required(),
            plot_village: Joi.string().required(),
            plot_mandal: Joi.string().required(),
            plot_municipality: Joi.string().required(),
            plot_district: Joi.string().required(),
            plot_survey_no: Joi.string().required(),
            land_use_from: Joi.string().required(),
            land_use_to: Joi.string().required(),
            site_abutting: Joi.string().required(),
            nature_of_road: Joi.string().required(),
            extent: Joi.string().required(),
            line_of_activity: Joi.string().required(),
            remarks_existin: Joi.string().required(),
            remarks_on_development: Joi.string().required(),
            project_brief: Joi.string().required(),
            master_plan: Joi.boolean().required()
        })
    }
}

module.exports = nocSchema;