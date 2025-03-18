// import dynamic from 'next/dynamic'
// const Wormhole = dynamic(() => import('@/features/Wormhole'))

// function Bridge() {
//   return <Wormhole />
// }

// export default Bridge

// export async function getStaticProps() {
//   return {
//     props: { title: 'Wormhole' }
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
