import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class MessagesController {

  public async create({view}: HttpContextContract) {
    return view.render('messages/create')
  }

  public async store({request}: HttpContextContract) {
    const data = request.only(['owner', 'content'])
    console.log(data)
    return '200'
  }
}
