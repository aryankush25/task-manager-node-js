const sgMail = require('@sendgrid/mail')
const sendgridApiKey =
  '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'

sgMail.setApiKey(sendgridApiKey)

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'aryan@geekyants.com',
      subject: 'Thanks for joining in!',
      text: `Welcome ${name}, Let me know how's the app?`,
      html: `<h1>Welcome ${name}, Let me know how's the app?</h1>`,
    })
    .then((res) => {
      console.log('res', res)
    })
    .catch((error) => {
      console.error('error', error)
    })
}

const sendCancelationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'aryan@geekyants.com',
      subject: 'Thanks for being with us!',
      text: `Hey ${name}, Let me if there's any thing I can do to stop you?`,
    })
    .then((res) => {
      console.log('res', res)
    })
    .catch((error) => {
      console.error('error', error)
    })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
}
