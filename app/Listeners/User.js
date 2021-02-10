'use strict'

const Mail = use('Mail')

const User = exports = module.exports = {}

User.verifyEmail = async ({ user, token }) => {
  await Mail.send('emails.verify-email', { user, token }, (message) => {
    message.to(user.email)
    message.subject('Verify your Etherchest email')
    message.from('noreply@etherchest.com')
  })
}
