const Router = require('express')
const {addModelPlane, getModelPlane, getModelPlanes, deletedModelPlane} = require ('../controllers/model-palne.controller')

const router = Router()

router.get('/', getModelPlanes)
router.get('/:id',getModelPlane)

router.post('/',addModelPlane)

router.put('/:id', (req, res) => {
res.json({ messageId: req.params.id })
})

router.delete('/:id', deletedModelPlane)

module.exports = router