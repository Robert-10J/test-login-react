import Header from '../components/Header'
import useAuthRedirect from '../hooks/useAuthRedirect'

const Homepage = () => {
  useAuthRedirect('/homepage');
  return (
    <main>
      <Header/>
    </main>
  )
}

export default Homepage