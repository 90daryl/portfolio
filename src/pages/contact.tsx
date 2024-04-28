import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Contact1 } from "@/components/ui/contact"
import Layout from "@/components/Layout"


const ContactPage: React.FC<PageProps> = () => {
    return (
      <Layout>
        <Contact1/>
      </Layout>
    )
  }
  
  export default ContactPage
  
  export const Head: HeadFC = () => <title>Contact Page</title>