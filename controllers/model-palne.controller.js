const ModelPlaneModel = require('../model/model-plane.model')

module.exports.addModelPlane = async (req, res) => {
    const listPots = req.body.list_code 
    if (!req.body.name) {
        res.status(400).json({ message: "Merci d'ajouter une nom" })
    }
    else if (!req.body.ref_code) {
        res.status(400).json({ message: "Merci d'ajouter une réference code" })
    }
    else if (!req.body.image) {
        res.status(400).json({ message: "Merci d'ajouter une image " })
    }
    // else if (!listPots) {
    //     res.status(400).json({ message: "Merci d'ajouter des pots " })
    // }
    else {
        const addModelPlane = await ModelPlaneModel.create({
            name: req.body.name,
            image: req.body.image,
            ref_code: req.body.ref_code,
            list_pots: req.body.list_pots,
        })
        res.status(200).json(addModelPlane)
    }
}