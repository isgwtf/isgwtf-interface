// import Staking from '@/features/Staking'

// function StakingPage() {
//   return <Staking />
// }

// export default StakingPage

// export async function getStaticProps() {
//   return {
//     props: { title: 'Staking' }
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
