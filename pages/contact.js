import MyLayout from "./components/layout"
import Header from "./components/header"

export default function Contact() {
  return (
    <>
  
    <MyLayout title="Contact"/>

    <main>
    <div style={{color:"#330a00"}}>
  <h1 align="center">Contact</h1>
</div>

<h2 align="center">Connect With Us</h2>
<div align="center" style={{color:"#330a00"}}>
  <div>
      <div>
        <h2>Facebook</h2>
    </div>
  </div>

  <div>
      <div>
        <h2>Instragram</h2>
    </div>
  </div>
  
  <div>
      <div>
        <h2>WhatsApp</h2>
    </div>
  </div>
  
  <div>
      <div>
        <h2>LinkedIn</h2>
    </div>
  </div>
  
  <div>
      <div>
        <h2>Email</h2>
    </div>
  </div>
  
  <div>
      <div>
        <h2>Call</h2>
    </div>
  </div>
  
</div>
    </main>

    </>
  )
}