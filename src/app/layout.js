export const metadata = {
  title: 'ADAPTA - App Psicopedagógica',
  description: 'Aplicación de adaptación DUA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
