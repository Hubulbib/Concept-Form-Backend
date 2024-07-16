import { Router } from 'express'
import { AuthMiddleware } from '../middlewares/authMiddleware/auth.middleware'
import { formController } from '../controllers/form.controller'
import { FormValidator } from '../validators/form.validator'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Forms
 *   description: Form management
 */

/**
 * @swagger
 * /forms:
 *   get:
 *     summary: Get all forms
 *     tags: [Forms]
 *     responses:
 *       200:
 *         description: A list of forms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FormEntityWithoutLayout'
 *       401:
 *         description: Not authorized
 */
router.get('/', [AuthMiddleware], formController.getAll)

/**
 * @swagger
 * /forms/{id}/layout:
 *   get:
 *     summary: Get layout by ID
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The layout ID
 *     responses:
 *       200:
 *         description: The layout description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Layout'
 *       404:
 *         description: Layout not found
 */
router.get('/:id/layout', [], formController.getLayout)

/**
 * @swagger
 * /forms/{id}:
 *   get:
 *     summary: Get a form by ID
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The form ID
 *     responses:
 *       200:
 *         description: The form description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FormEntityWithoutLayout'
 *       404:
 *         description: Form not found
 *       403:
 *         description: Not access to Form
 *       401:
 *         description: Not authorized
 */
router.get('/:id', [AuthMiddleware], formController.getOneById)

/**
 * @swagger
 * /forms:
 *   post:
 *     summary: Create a new form
 *     tags: [Forms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormCreateBodyDto'
 *     responses:
 *       201:
 *         description: The form was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FormEntity'
 *       401:
 *         description: Not authorized
 *       400:
 *         description: Bad request
 */
router.post('/', [AuthMiddleware, FormValidator.create], formController.createOne)

/**
 * @swagger
 * /forms/{id}:
 *   put:
 *     summary: Update a form by ID
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The form ID
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormEditBodyDto'
 *     responses:
 *       200:
 *         description: The form was updated successfully
 *       404:
 *         description: Form not found
 *       403:
 *         description: Not access to Form
 *       401:
 *         description: Not authorized
 *       400:
 *         description: Bad request
 */
router.put('/:id', [AuthMiddleware, FormValidator.edit], formController.editOne)

/**
 * @swagger
 * /forms/{id}:
 *   delete:
 *     summary: Remove a form by ID
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The form ID
 *     responses:
 *       200:
 *         description: The form was removed successfully
 *       403:
 *         description: Not access to Form
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Form not found
 */
router.delete('/:id', [AuthMiddleware], formController.removeOne)

export const formRouter = router
