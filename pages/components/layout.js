import Header from "./header"
import Link from "next/link"


export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <nav  border="3" align="right" style={{background:"#330a00", height:"10%"}}>
        <h1 align="left" style={{background:"#661400", height:"10%"}} > Restaurant Management System</h1>
        <Link href="/"> Home</Link>
        <Link href="/about"> About </Link>
        <Link href="/contact"> Contact</Link>
        <Link href="/login"> Login</Link>
        </nav>
       
        <main>

        </main>
        <div align="center" style={{ position: "absolute", bottom: 0, width:"100%", height:"5%", background:"#661400"}}>
         Restaurant Management System @copyright 2023 | Group 10</div>
        </>
    )
}