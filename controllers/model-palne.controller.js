const ModelPlaneModel = require('../model/model-plane.model')
const PotsModel = require('../model/pots.model')

module.exports.addModelPlane = async (req, res) => {
    
    if (!req.body.name) {
        res.status(400).json({ message: "Merci d'ajouter une nom" })
    }
    else if (!req.body.ref_code) {
        res.status(400).json({ message: "Merci d'ajouter une réference code" })
    }
    else if (!req.body.image) {
        res.status(400).json({ message: "Merci d'ajouter une image " })
    }
    else if (!req.body.list_pots) {
        res.status(400).json({ message: "Merci d'ajouter des pots " })
    }
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

module.exports.getModelPlane = async (req, res) => {

    const getModelPlanes = await ModelPlaneModel.findById(req.params.id)
    const pots = []
    for (const potId of getModelPlanes.list_pots) {
        const pot = await PotsModel.findById(potId)
        pots.push({
            color: pot.color,
            brand: pot.brand,
            ref_code: pot.ref_code,
            timestamps: pot.timestamps
        })
    }

    res.status(200).json({
        id: getModelPlanes.id,
        name: getModelPlanes.name,
        ref_code: getModelPlanes.ref_code,
        image: getModelPlanes.image,
        list_code: pots
    })
}

module.exports.getModelPlanes = async (req, res) => {
    const getModelPlanes = await ModelPlaneModel.find()
    res.status(200).json(getModelPlanes)
}

module.exports.deletedModelPlane = async (req, res) => {

    const deleteModelPlane = await ModelPlaneModel.findById(req.params.id)
    if (!deleteModelPlane) {
        res.status(400).json({ message: "Ce pot n'existe pas" })
    }
    await deleteModelPlane.deleteOne()

    res.status(200).json({message: "Maquette suppimé: " + req.params.id})
}