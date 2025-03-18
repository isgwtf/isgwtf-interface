// import dynamic from 'next/dynamic'
// const Moonpay = dynamic(() => import('@/features/Moonpay'))

// function MoonpayPage() {
//   return <Moonpay />
// }

// export default MoonpayPage

// export async function getStaticProps() {
//   return {
//     props: { title: 'Moonpay' }
//   }
// }

import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page404() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return null
}
