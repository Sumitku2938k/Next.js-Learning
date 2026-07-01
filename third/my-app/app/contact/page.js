import React from 'react'
import Script from 'next/script'

const Contact = () => {
  return (
    <div>
        {/*To use JS in Next.js at a particular page*/}
        <Script>{`alert("Welcome to Contact Page");`}</Script> 
        Contact Page
    </div>
  )
}

export default Contact

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description: "This is the contact page for facebook and we can connect with the world using facebook",
};