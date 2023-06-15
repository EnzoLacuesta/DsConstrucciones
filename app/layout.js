import style from './page.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.body}>
        {children}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
