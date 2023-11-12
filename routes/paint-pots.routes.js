const Router = require('express')
const { setPots, getPots, editPot, deletedPot, getPot } = require('../controllers/pots.controller')

const router = Router()

router.get('/', getPots)

router.get('/:id', getPot)

router.post('/', setPots)

router.put('/:id', editPot)

router.delete('/:id', deletedPot)

module.exports = router