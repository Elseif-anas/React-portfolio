# EmailJS Setup Guide

To make your contact form functional and send emails directly to your inbox, follow these steps:

## 1. Sign up for EmailJS
- Go to [EmailJS.com](https://www.emailjs.com/)
- Create a free account
- Verify your email

## 2. Create an Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account (anasfida00@gmail.com)
- Note down the **Service ID** (looks like: `service_abc123`)

## 3. Create an Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```
Subject: New message from {{from_name}} - {{subject}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

- Save the template and note down the **Template ID** (looks like: `template_xyz789`)

## 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key** (looks like: `user_abc123def456`)

## 5. Update Your Contact Component
Replace the current ContactForm in `src/components/Contact.jsx` with this working version:

```javascript
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY_HERE")
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'anasfida00@gmail.com'
      }

      await emailjs.send(
        'YOUR_SERVICE_ID_HERE', // Replace with your service ID
        'YOUR_TEMPLATE_ID_HERE', // Replace with your template ID
        templateParams
      )
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setError('Failed to send message. Please try again.')
      setIsSubmitting(false)
    }
  }

  // ... rest of the component remains the same
}
```

## 6. Replace the Placeholder Values
In the code above, replace:
- `YOUR_PUBLIC_KEY_HERE` with your actual public key
- `YOUR_SERVICE_ID_HERE` with your actual service ID  
- `YOUR_TEMPLATE_ID_HERE` with your actual template ID

## 7. Example Configuration:
```javascript
emailjs.init("user_abc123def456") // Your public key
await emailjs.send(
  'service_xyz789', // Your service ID
  'template_abc123', // Your template ID
  templateParams
)
```

## 8. Test the Form
- Start your development server
- Fill out the contact form
- Submit and check your email (anasfida00@gmail.com)
- Check browser console for any errors

## Free Plan Limits:
- 200 emails per month
- Perfect for portfolio websites

## Troubleshooting:
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is connected
- Ensure your template variables match the code
- Make sure you're using the correct email address

## Current Status:
✅ Form fields are now interactive and clickable
✅ Form validation is working
✅ Success/error states are working
⏳ EmailJS integration needs your credentials

Your contact form will now send real emails to anasfida00@gmail.com once you complete the EmailJS setup! 🎉
