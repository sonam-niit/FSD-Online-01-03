import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./components/home"
import UserProfile from "./components/UserProfile"
import PostList from "./components/postlist"
import withBorder from "./components/withBorder"

function App() {
  const UserProfileWithBorder = withBorder(UserProfile);
  const HomeWithBorder = withBorder(Home);
  return (
    <BrowserRouter>
    
      <Link to="/"> Home </Link>
      <Link to="/users"> User Profiles </Link>
      <Link to="/posts"> User Posts </Link>

      <Routes>
        <Route path="" element={ <HomeWithBorder />} />
        <Route path="users" element={ <UserProfileWithBorder />} />
        <Route path="posts" element={ <PostList />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
