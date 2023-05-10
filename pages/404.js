import Link from "next/link"
import MyLayout from '@/pages/components/layout';
import Image from "next/image";
export default function Custom404() {


    return (
      <>
    
      <MyLayout title="Error"/>
      <Image src="/bibimbap.png" alt="me" width="64" height="64" />
        <h1>404</h1>
      <h1>This page does not exists</h1>

    <Link href="/">Go back HOME</Link>
      </>
    )
  }