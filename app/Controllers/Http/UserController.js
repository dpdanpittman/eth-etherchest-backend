'use strict'

const Persona = use('Persona')

class UserController {
  async register ({ request, response }) {
    const payload = request.only(['email', 'password', 'password_confirmation'])

    const user = await Persona.register(payload)

    response.send({
      success: {
        message:
          'Successfully registered. Please verify your email address before continuing.'
      }
    })
  }

  async verifyEmail ({ params, response }) {
    const user = await Persona.verifyEmail(params.token)

    if (user) {
      response.send({
        success: {
          message: 'Email verified successfully.'
        }
      })
    }
  }
}

module.exports = UserController
