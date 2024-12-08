import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig({
//   base: '/GeminiApp/', // تأكد من أن المسار يتطابق مع اسم المستودع
//   plugins: [react()]
// })
