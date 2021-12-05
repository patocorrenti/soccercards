import { Fragment } from 'react'
import Head from 'next/head'
import { GoogleFonts } from "next-google-fonts";

export default function DocumentHead ({ title }) {
  return (
    <Fragment>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,800&display=swap"
      />
      <Head>
        <title>
          {title && `${title} | `}
          {process.env.NEXT_PUBLIC_TITLE}
        </title>
      </Head>
    </Fragment>
  )
}
