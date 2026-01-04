import React from 'react';
import { DocumentData } from '../types';
import { FileText, Shield, FolderOpen } from 'lucide-react';

interface SidebarProps {
  documents: DocumentData[];
  activeDocId: string;
  onSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ documents, activeDocId, onSelect }) => {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-full flex-shrink-0 print:hidden">
      <div className="p-6 border-b border-slate-700 flex items-center gap-3 shrink-0">
        <div className="bg-corporate-accent p-2 rounded-lg">
          <Shield className="text-white w-5 h-5" />
        </div>
        <div>
          <h1 className="text-sm font-bold leading-tight">GESTOR<br/>DOCUMENTAL</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <div className="text-xs font-semibold text-slate-400 uppercase mb-3 px-2">Repositorio</div>
        <nav className="space-y-1">
          {documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => onSelect(doc.id)}
              className={`w-full flex items-start gap-3 p-3 text-left rounded-lg transition-all ${
                activeDocId === doc.id 
                  ? 'bg-corporate-accent text-white shadow-md' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium line-clamp-2">{doc.title}</div>
                <div className="text-xs opacity-70 mt-1">{doc.code}</div>
              </div>
            </button>
          ))}
        </nav>
      </div>

      <div className="shrink-0 p-4 border-t border-slate-700">
        <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors w-full px-2 py-2">
          <FolderOpen size={16} />
          <span>Explorar Archivo</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;