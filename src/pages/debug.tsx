// import Debug from '@/features/Debug'

// export default function DebugPage() {
//   return <Debug />
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
