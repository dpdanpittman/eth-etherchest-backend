'use strict'

const Coinbase = use('coinbase-commerce-node')

class WebhookController {
  async handle ({ request, response }) {
    const webhookSecret = 'f70f488e-d1b8-4f5c-ab66-1580223ceb28'
    let event

    try {
      event = Coinbase.Webhook.verifyEventBody(
        request.raw(),
        request.headers()['x-cc-webhook-signature'],
        webhookSecret
      )
    } catch (error) {
      console.log('Error occurred', error.message)

      return response.status(400).send('Webhook Error:' + error.message)
    }

    console.log('Success', event)

    response.status(200).send()
  }
}

module.exports = WebhookController
