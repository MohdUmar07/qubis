import Image from "next/image"

type Props = {
    size?: number;
};

const LoadingLogo = ({size=100}: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-100">
        <Image src="/logo.png" alt="Qubis Logo" width={size} height={size} 
        className="animate-pulse duration-800"/>
        
    </div>
  )
}

export default LoadingLogo;