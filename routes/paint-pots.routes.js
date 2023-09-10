import { Router } from 'express'

export const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Voici mes données' })
})
router.post('/add', (req, res) => {
  res.json({ message: req.body.message })
})

router.put('/modify/:id', (req, res) => {
  res.json({ messageId: req.params.id })
})
router.delete('/deleted/:id', (req, res) => {
  res.json({ message: `Post supprimé id ${req.params.id}` })
})
