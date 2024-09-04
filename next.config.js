/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.thecodecafelab.com'], 
  },
};

module.exports = nextConfig;
// config/formConfig.js
//   [
//   {
//     name: 'name',
//     type: 'text',
//     placeholder: 'Your Name',
//     validation: { required: 'Name is required' },
//   },
//   {
//     name: 'email',
//     type: 'email',
//     placeholder: 'Your Email',
//     validation: { 
//       required: 'Email is required',
//       pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' }
//     },
//   },
//   {
//     name: 'message',
//     type: 'textarea',
//     placeholder: 'Your Message',
//     validation: { required: 'Message is required' },
//   },
//   // Add more fields as needed
// ];
