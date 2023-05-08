import MyLayout from "./components/layout"
import Header from "./components/header"

export default function About() {
  return (
    <>
  
    <MyLayout title="About"/>
    <main>
    <form align="center">
        <fieldset align="center" style={{position:"relative",color:"#330a00"}}>
<div>
  <h1>About Us</h1>
  <p>The Team Members of Restaurant Management System</p>
</div>

      <div>
        <h2>Sameen Abrar</h2>
        <p >20-41929-1</p>
      </div>

      <div>
        <h2>Samira Kabir Rima</h2>
        <p >20-42406-1</p>
      </div>

      <div>
        <h2>Tarekuzzaman Moin</h2>
        <p >19-41025-2</p>
      </div>

      <div>
        <h2>Shaikh Kingshuk Al-Aziz</h2>
        <p >20-42374-1</p>
      </div>

    </fieldset>
    </form>
    </main>
    </>
  )
}