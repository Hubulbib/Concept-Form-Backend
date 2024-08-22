import swaggerJSDoc from 'swagger-jsdoc'
import { setup, serve } from 'swagger-ui-express'
import { Application } from 'express'
import {
  AnswerCreateBodyDto,
  AnswerEntity,
  AnswerList,
  FormCreateBodyDto,
  FormEditBodyDto,
  FormEntity,
  FormEntityWithoutLayout,
  HierarchyLayoutNode,
  Layout,
  LayoutItem,
} from './schemas'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FORMAteka API',
      version: '1.0.0',
      description: 'A simple API documentation using Swagger.All api endpoints starts of /api/*.',
    },
    components: {
      schemas: {
        FormEntityWithoutLayout,
        FormEntity,
        FormCreateBodyDto,
        LayoutItem,
        AnswerEntity,
        AnswerList,
        Layout,
        HierarchyLayoutNode,
        AnswerCreateBodyDto,
        FormEditBodyDto,
      },
    },
  },
  apis: ['./src/infrastructure/routers/*.router.ts'], // Путь к вашим файлам маршрутов
}

const swaggerSpec = swaggerJSDoc(options)

export const setupSwagger = (app: Application): void => {
  app.use('/api-docs', serve, setup(swaggerSpec))
}
