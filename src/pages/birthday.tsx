import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Contact1 } from "@/components/ui/contact"
import Layout from "@/components/Layout"


const Birthdays: React.FC<PageProps> = () => {
    return (
      <Layout>
        <p>Under Construction</p>
      </Layout>
    )
  }
  
  export default Birthdays
  
  export const Head: HeadFC = () => <title>Birthday Page</title>