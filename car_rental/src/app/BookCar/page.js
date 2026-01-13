'use client';
import BookingPage from '@/components/bookingPage'
import Footer from '@/components/footer'
import MyNavbar from '@/components/navbar'
import React from 'react'

function page() {
  return (
    <div>
    <MyNavbar />
    <BookingPage />
    <Footer />
    </div>
  )
}

export default page