import { Header1 } from "@/components/ui/header"
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

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
        <main style={pageStyles}>
            <Header1/>
            {children}
        </main>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout