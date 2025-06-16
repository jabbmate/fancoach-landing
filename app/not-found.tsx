import Link from 'next/link'
import Logo from '@/components/Logo'
import PrimaryButton from '@/components/PrimaryButton'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <Logo className="mb-8 justify-center" />
        
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          Looks like this play doesn't exist in our playbook.
        </p>
        
        <Link href="/">
          <PrimaryButton>
            Back to Home
          </PrimaryButton>
        </Link>
      </div>
    </div>
  )
} 