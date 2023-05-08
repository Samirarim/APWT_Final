import Link from "next/link"
import MyLayout from '@/pages/components/layout';
import Image from "next/image";
export default function Custom404() {


    return (
      <>
    
      <MyLayout title="Error"/>
      <Image src="/bibimbap.png" alt="me" width="64" height="64" />
        <h1 style={{color:"#330a00"}}>404</h1>
      <h1 style={{color:"#330a00"}}>This page does not exists</h1>

    <Link style={{color:"#330a00"}} href="/">Go back HOME</Link>
      </>
    )
  }