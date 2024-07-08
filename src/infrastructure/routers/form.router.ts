import { Router } from 'express'
import { AuthMiddleware } from '../middlewares/authMiddleware/auth.middleware.js'
import { formController } from '../controllers/form.controller.js'

const router = Router()

//@ts-ignore
router.get('/', [AuthMiddleware], formController.getAll)

//@ts-ignore
router.get('/:id', [AuthMiddleware], formController.getOneById)

router.get('/layout/:id', [], formController.getLayout)

//@ts-ignore
router.post('/', [AuthMiddleware], formController.createOne)

//@ts-ignore
router.put('/:id', [AuthMiddleware], formController.editOne)

//@ts-ignore
router.delete('/:id', [AuthMiddleware], formController.removeOne)

export const formRouter = router
