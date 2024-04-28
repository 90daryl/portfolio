import { Header1 } from "@/components/ui/header"
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Footer1 } from "./ui/footer";

interface LayoutProps {
    children: ReactNode;
  }

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

function Layout({ children }: LayoutProps) {
    return (
        <main className="pt-24 pb-4">
            <Header1/>
            {children}
            <Footer1/>
        </main>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout