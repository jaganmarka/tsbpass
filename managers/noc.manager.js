const nocsModel = require('../models').nocs;
const applicantMananger = require('../managers/applicant.manager')
const nocManager = {

    createNocs: (noc) => {
        return new Promise(async (resolve, reject) => {
            try {
                const applicantResult = await applicantMananger.createApplicant(noc);
                if (!applicantResult.id) {
                    reject({ message: 'Server Error.' })
                }
                noc['applicant_id'] = applicantResult.id;
                const nocResp = await nocManager.createNocRecord(noc);
                resolve(nocResp)
            } catch (err) {
                reject(err)
            }
        })
    },

    /**
     * Create a new record in nocs table
     */
    createNocRecord: (noc) => {
        return new Promise((resolve, reject) => {
            nocsModel.create(noc)
                .then(nocResp => {
                    resolve(nocResp)
                })
                .catch(error => {
                    reject(error)
                });
        })
    }


}

module.exports = nocManager;