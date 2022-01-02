import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="error-page">
        <div className="page-center">
          <span>404</span>
          <p>Sorry, the page cannot be found...</p>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </section>
    </Layout>
  )
}
export default NotFoundPage
