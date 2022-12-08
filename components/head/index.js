import NextHead from "next/head"
import React from "react"


const Head = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>{title} </title>
      <meta itemProp="name" content={title} />
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
                
    </NextHead>
  )
}

export default Head
