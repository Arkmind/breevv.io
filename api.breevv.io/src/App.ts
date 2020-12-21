import bodyParser from 'body-parser'
import express, { Application } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { Client } from 'pg'

import { PG_BASE, PG_HOST, PG_PASS, PG_USER } from './config/dotenv'
import Controller from './interfaces/controller.interface'
import middleware from './middleware/middleware'

class App {
  public app: Application
  public port: number
  public database: Client

  constructor(controllers: Array<Controller>, port: number) {
    this.app = express()
    this.port = port
    this.database = this.getClientDB()
    this.database.connect()

    this.initializeOptions()
    this.initializeControllers(controllers)
    this.initializeMiddlewares()
  }

  private initializeGraphql() {
    /* this.app.use('/graphql', graphqlHTTP({
      schema: schema,
      graphiql: true,
    })) */
  }

  private initializeOptions() {
    this.app.use(bodyParser.json())
  }

  private initializeMiddlewares() {
    this.app.use(middleware)
  }

  private initializeControllers(controllers: Array<Controller>) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router)
    })
  }

  private getClientDB() {
    return new Client({
      host: PG_HOST,
      user: PG_USER,
      password: PG_PASS,
      database: PG_BASE,
    })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}

export default App
