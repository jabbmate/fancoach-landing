export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fancoach-teal mx-auto mb-4"></div>
        <p className="text-gray-300">Loading FanCoach...</p>
      </div>
    </div>
  )
} 