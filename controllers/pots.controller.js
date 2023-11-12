const PotsModel = require('../model/pots.model')

module.exports.getPots = async (req, res) => {
    const pots = await PotsModel.find()
    res.status(200).json(pots)
}

module.exports.getPot = async (req, res) => {
    const pot = await PotsModel.findById(req.params.id)
    res.status(200).json(pot)
}

module.exports.setPots = async (req, res) => {
    if (!req.body.color) {
        res.status(400).json({ message: "Merci d'ajouter une couleur" })
    }
    else if (!req.body.brand) {
        res.status(400).json({ message: "Merci d'ajouter une marque" })
    }
    else if (!req.body.ref_code) {
        res.status(400).json({ message: "Merci d'ajouter une réference code" })
    }
    else {
        const addPots = await PotsModel.create({
            color: req.body.color,
            brand: req.body.brand,
            ref_code: req.body.ref_code,
        })
        res.status(200).json(addPots)
    }
}

module.exports.editPot = async (req, res) => {
    const pot = await PotsModel.findById(req.params.id)

    if (!pot) {
        res.status(400).json({message: "id inconnu"})
    }
    const updatePot = await PotsModel.findByIdAndUpdate(
        pot,
        req.body,
        { new: true }
    )
    res.status(200).json(updatePot)
}

module.exports.deletedPot = async (req, res) => {
    const pot = await PotsModel.findById(req.params.id)

    if (!pot) {
        res.status(400).json({ message: "Ce pot n'existe pas" })
    }
    await pot.deleteOne()
    res.status(200).json("Pot supprimé " + req.params.id)
}

