// Assuming your Loader component looks something like this
// This is a placeholder, replace with your actual Loader component
interface LoaderProps {
    show: boolean
  }
  
  export function Loader({ show }: LoaderProps) {
    if (!show) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="text-white ml-4 text-lg">Loading...</p>
      </div>
    )
  }
  