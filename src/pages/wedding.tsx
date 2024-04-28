import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@/components/Layout"
import { Case1 } from "@/components/ui/case"


const Weddings: React.FC<PageProps> = () => {
    return (
      <Layout>
        <Case1/>
      </Layout>
    )
  }
  
  export default Weddings
  
  export const Head: HeadFC = () => <title>Wedding Page</title>