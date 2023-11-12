const Router = require('express')
const {addModelPlane} = require ('../controllers/model-palne.controller')

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'Voici mes données' })
})
router.get('/:id', (req, res) => {
    res.json({ messageId: req.params})
})

router.post('/',addModelPlane)

router.put('/:id', (req, res) => {
res.json({ messageId: req.params.id })
})

router.delete('/:id', (req, res) => {
res.json({ message: `Post supprimé id ${req.params.id}` })
})

module.exports = router