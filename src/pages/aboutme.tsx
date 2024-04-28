import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Contact1 } from "@/components/ui/contact"
import Layout from "@/components/Layout"


const AboutMe: React.FC<PageProps> = () => {
    return (
      <Layout>
        <p>Under Construction</p>
      </Layout>
    )
  }
  
  export default AboutMe
  
  export const Head: HeadFC = () => <title>Contact Page</title>