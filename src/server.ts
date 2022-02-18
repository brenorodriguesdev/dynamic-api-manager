import { createController } from './controllers/createController'
import { createServiceController } from './controllers/createService'
import { getAllControllers } from './controllers/getAllControllers'
import { getAllServicesController } from './controllers/getAllServices'
import { deleteController } from './controllers/deleteController'
import { deleteServiceController } from './controllers/deleteService'
import { updateServiceController } from './controllers/updateService'
import { updateController } from './controllers/updateController'
import { MongoHelper } from './mongoHelper'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/createService', createServiceController.handle)
app.get('/getAllServices', getAllServicesController.handle)
app.put('/updateService', updateServiceController.handle)
app.delete('/deleteService', deleteServiceController.handle)

app.post('/createController', createController.handle)
app.get('/getAllControllers', getAllControllers.handle)
app.put('/updateController', updateController.handle)
app.delete('/deleteController', deleteController.handle)

app.listen(4444, () => {
    console.log('Running at http://localhost:4444')
    MongoHelper.connect('mongodb://root:1@localhost:27017/admin')
})