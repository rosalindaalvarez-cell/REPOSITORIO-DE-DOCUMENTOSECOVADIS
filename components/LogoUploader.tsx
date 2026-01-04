import React, { useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface LogoUploaderProps {
  currentLogo: string | null;
  onUpload: (file: File) => void;
}

const LogoUploader: React.FC<LogoUploaderProps> = ({ currentLogo, onUpload }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white border-b border-gray-200">
      <div 
        className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
        onClick={() => inputRef.current?.click()}
      >
        {currentLogo ? (
          <img src={currentLogo} alt="Logo Corporativo" className="w-full h-full object-contain" />
        ) : (
          <ImageIcon className="text-gray-400 w-8 h-8" />
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-slate-800">Logo Institucional</h3>
        <p className="text-xs text-slate-500 mb-2">Este logo aparecerá en todos los documentos.</p>
        <button 
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-2 text-xs text-corporate-accent hover:text-blue-800 font-medium transition-colors"
        >
          <Upload size={14} />
          Subir imagen
        </button>
        <input 
          ref={inputRef}
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default LogoUploader;
