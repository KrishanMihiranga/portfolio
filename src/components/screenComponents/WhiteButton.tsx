
interface WhiteButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  downloadUrl?: string;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ onClick, children, downloadUrl }) => {

  const handleClick = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = downloadUrl.split('/').pop() || 'file.pdf';
      link.click();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className="px-5 py-1 text-lg tracking-widest text-black bg-white rounded-md bg-opacity-90 hover:bg-opacity-100 font-GeistRegular">
      {children}
    </button>
  )
}

export default WhiteButton