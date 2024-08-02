
interface WhiteButtonProps {
  onClick?: () => void; 
  children: React.ReactNode;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({onClick,children}) => {
  return (
    <button onClick={onClick} className="px-5 py-1 text-lg tracking-widest text-black bg-white rounded-md bg-opacity-90 hover:bg-opacity-100 font-GeistRegular">
      {children}
    </button>
  )
}

export default WhiteButton