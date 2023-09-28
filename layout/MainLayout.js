import Info from '../components/Info'
function MainLayout({ children }) {
  return (
    <div>
      <Info />
      <div>{children}</div>
      <footer>footer</footer>
    </div>
  )
}

export default MainLayout
