import React, { useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import DocumentViewer from './components/DocumentViewer';
import LogoUploader from './components/LogoUploader';
import { useRepository } from './services/repoService';
import { FileDown, Loader2 } from 'lucide-react';

// Declare html2pdf for TypeScript
declare var html2pdf: any;

const App: React.FC = () => {
  const { documents, activeDocument, logo, uploadLogo, selectDocument } = useRepository();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById('document-viewer-content');
    if (!element) return;

    setIsGenerating(true);

    // Apply printing mode class to container
    element.classList.add('printing-mode');

    const opt = {
      // 0 margin because CSS now handles the strict 2cm (20mm) padding internally
      // This ensures what you see on screen (WYSIWYG) is exactly what prints.
      margin:       0, 
      
      filename:     `${activeDocument.code}_${activeDocument.title.replace(/\s+/g, '_')}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
        scale: 2, 
        useCORS: true, 
        logging: false,
        scrollY: 0 
      },
      jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' }, // Changed to mm to match CSS
      pagebreak:    { mode: ['css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Hubo un error generando el PDF.");
    } finally {
      element.classList.remove('printing-mode');
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      <Sidebar 
        documents={documents} 
        activeDocId={activeDocument.id} 
        onSelect={selectDocument} 
      />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Actions Bar */}
        <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-20 shadow-sm print:hidden">
           <div className="text-sm font-medium text-slate-500">
              Vista Previa: <span className="text-slate-900 font-bold">{activeDocument.title}</span>
           </div>
           <div className="flex items-center gap-3">
             <button 
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className={`flex items-center gap-2 bg-corporate-accent text-white px-4 py-2 rounded-md transition-colors text-sm font-medium shadow-md ${
                  isGenerating ? 'opacity-75 cursor-wait' : 'hover:bg-blue-800'
                }`}
             >
               {isGenerating ? (
                 <>
                   <Loader2 size={16} className="animate-spin" />
                   <span>Generando...</span>
                 </>
               ) : (
                 <>
                   <FileDown size={16} />
                   <span>Generar PDF</span>
                 </>
               )}
             </button>
           </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-auto bg-slate-700 p-8 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent">
           <div className="flex flex-col items-center space-y-8">
             <div className="w-[216mm] bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden print:hidden">
               <LogoUploader currentLogo={logo} onUpload={uploadLogo} />
             </div>
             
             <DocumentViewer document={activeDocument} logo={logo} />
           </div>
        </div>
      </main>
    </div>
  );
};

export default App;