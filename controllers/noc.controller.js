const nocManager = require('../managers/noc.manager');
const joiValidator = require('../helpers/validator');
const nocSchema = require('../schemas/noc.schema')

const nocController = {
    /**
     * Add new Record
     */
    create: async (req, res) => {
        try {
            const validReq = await joiValidator.jsonValidator(req.body, nocSchema.noc());
            const nocResult = await nocManager.createNocs(validReq);
            res.send(nocResult)
        } catch (err) {
            console.log(err)
            res.send(err)
        }
    },

    /**
     * Get all Records
     */
    get: (req, res) => {
        res.send({ data: "list" })
    },
    /**
     * Get Record by Record ID
     */
    getById: (req, res) => {
        res.send({ data: "list by Id" })
    },

    /** 
     * Update Record by Record ID
     */
    update: (req, res) => {
        res.send({ data: "Update By Id" })
    },

    /**
     * Delete Record by Record ID
     */
    delete: (req, res) => {
        res.send({ data: "delete By Id" })
    }
}

module.exports = nocController;