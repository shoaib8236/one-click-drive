import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CarBrandLinks = (props) => {


  return (
    <div className="car_brand_links">
      <Link
        href={'/car-brand/Audi'}
      >
        <Image src="/audi.webp" height={16} width={40} objectFit="contain" />
        <span className="brand_links_content">
          <span>Audi (50+)</span>
          <span>A3, A6, R5...</span>
        </span>
      </Link>
      <Link
        href={'/car-brand/BMW'}
      >
        <Image src="/audi.webp" height={16} width={40} objectFit="contain" />
        <span className="brand_links_content">
          <span>BMW (90+)</span>
          <span>A3, A6, R5...</span>
        </span>
      </Link>
      <Link
        href={'/car-brand/Toyota'}
      >
        <Image src="/audi.webp" height={16} width={40} objectFit="contain" />
        <span className="brand_links_content">
          <span>Toyota (60+)</span>
          <span>A3, A6, R5...</span>
        </span>
      </Link>
      <Link
        href={'/car-brand/audi'}
      >
        <Image src="/audi.webp" height={16} width={40} objectFit="contain" />
        <span className="brand_links_content">
          <span>Volksvagon (70+)</span>
          <span>A3, A6, R5...</span>
        </span>
      </Link>
      <Link
        href={'/car-brand/KIA'}
      >
        <Image src="/audi.webp" height={16} width={40} objectFit="contain" />
        <span className="brand_links_content">
          <span>KIA (20+)</span>
          <span>A3, A6, R5...</span>
        </span>
      </Link>
      <Link
        href={'/car-brand/Honda'}
      >
        <Image src="/audi.webp" height={16} width={40} objectFit="contain" />
        <span className="brand_links_content">
          <span>Honda (70+)</span>
          <span>A3, A6, R5...</span>
        </span>
      </Link>
    </div>
  )
}

export default CarBrandLinks