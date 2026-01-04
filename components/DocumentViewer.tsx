import React from 'react';
import { DocumentData, BlockType, ContentBlock, Section, TableData, GridCard, Signature } from '../types';
import SalaryCalculator from './SalaryCalculator';

interface DocumentViewerProps {
  document: DocumentData;
  logo: string | null;
}

const RenderBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case BlockType.HEADER:
      return (
        <h3 className="pdf-item text-corporate-accent font-bold text-base uppercase tracking-wide mt-6 border-l-4 border-corporate-accent pl-3" style={{ pageBreakAfter: 'avoid' }}>
          {block.content}
        </h3>
      );
    case BlockType.PARAGRAPH:
      return (
        <p className="pdf-item text-slate-600 leading-relaxed text-justify text-xs sm:text-sm mb-2">
          {block.content}
        </p>
      );
    case BlockType.HIGHLIGHT:
      const isRed = block.options?.highlightColor === 'red';
      const isBlue = block.options?.highlightColor === 'blue';
      
      let bgColor = 'bg-slate-50';
      let borderColor = 'border-slate-400';
      let titleColor = 'text-slate-800';

      if (isRed) {
        bgColor = 'bg-red-50';
        borderColor = 'border-red-500';
        titleColor = 'text-red-700';
      } else if (isBlue) {
        bgColor = 'bg-blue-50';
        borderColor = 'border-blue-600';
        titleColor = 'text-blue-800';
      } else {
        // Corporate default
        bgColor = 'bg-corporate-50';
        borderColor = 'border-corporate-accent';
        titleColor = 'text-corporate-800';
      }
      
      return (
        <div className={`pdf-item ${bgColor} border-l-4 ${borderColor} p-4 rounded-r-lg shadow-sm mb-3`}>
          {block.title && <div className={`${titleColor} font-bold text-[10px] uppercase mb-1 tracking-wider`}>{block.title}</div>}
          <div className="text-slate-700 italic text-xs leading-normal">{block.content}</div>
        </div>
      );
    case BlockType.FORMULA:
      return (
        <div className="pdf-item border-2 border-dashed border-slate-200 rounded-lg p-5 flex justify-center items-center bg-slate-50 mb-3">
          <code className="text-corporate-800 font-bold text-base text-center font-mono">
            {block.content}
          </code>
        </div>
      );
    case BlockType.LIST:
      const items = block.content as string[];
      const isOrdered = block.options?.isOrdered;
      return (
        <ul className={`pdf-item space-y-1.5 ml-5 ${isOrdered ? 'list-decimal' : 'list-disc'} text-slate-600 mb-3`}>
          {items.map((item, idx) => (
            <li key={idx} className="pl-1">
              <span className="text-xs leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case BlockType.GRID_CARDS:
      const cards = block.content as GridCard[];
      const cols = block.options?.columns || 1;
      return (
        <div className={`pdf-item grid grid-cols-1 md:grid-cols-${cols} gap-3 mb-3`}>
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm relative overflow-hidden transition-all hover:shadow-md pl-5">
              {/* Stronger left accent bar to match Values style */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-corporate-accent"></div>
              {card.number && <div className="text-corporate-accent font-black text-lg mb-1 opacity-40">{card.number}</div>}
              {card.title && <div className="font-bold text-corporate-900 mb-1 text-[11px] uppercase">{card.title}</div>}
              <div className="text-slate-600 text-[10px] leading-snug">{card.text}</div>
            </div>
          ))}
        </div>
      );
    case BlockType.TABLE:
      const table = block.content as TableData;
      return (
        <div className="pdf-item overflow-x-auto rounded-lg border border-slate-200 mb-3">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {table.columns.map((col, idx) => (
                  <th key={idx} className="p-2.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest" style={{ width: col.width }}>
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {table.rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {table.columns.map((col, cIdx) => (
                    <td key={cIdx} className="p-2.5 text-xs text-slate-600 align-top">
                      {row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case BlockType.SIGNATURE:
      const sigs = block.content as Signature[];
      // Adaptive layout: Centers for few signatures, Space-between for many (max 5 in a row)
      const isCompact = sigs.length > 3;
      
      return (
        <div className="pdf-item signature-block w-full mt-24 pb-20" style={{ pageBreakInside: 'avoid' }}>
           <div className={`flex flex-wrap ${isCompact ? 'justify-between' : 'justify-center gap-20'} w-full items-end`}>
              {sigs.map((sig, idx) => (
                <div key={idx} className={`flex flex-col justify-end text-center ${isCompact ? 'w-[19%]' : 'w-48'} mb-4`}>
                  <div className="w-full border-b border-slate-800 mb-2"></div>
                  <div className="font-bold text-slate-900 text-[8px] uppercase tracking-wide leading-tight">{sig.role}</div>
                  <div className="text-slate-500 text-[7px] uppercase tracking-wider leading-tight pt-0.5">{sig.area}</div>
                </div>
              ))}
           </div>
        </div>
      );
    default:
      return null;
  }
};

const DocumentViewer: React.FC<DocumentViewerProps> = ({ document, logo }) => {
  
  // Custom Render for Salary Proposal
  if (document.id === 'doc-002') {
    return (
      <div id="document-viewer-content">
        <SalaryCalculator logo={logo} />
      </div>
    );
  }

  // Standard Render for Manual Maestro
  return (
    <div 
      id="document-viewer-content" 
      className="letter-paper print:my-0 relative transition-all duration-300"
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-corporate-accent pb-3 mb-8">
        <div className="w-1/3">
          {logo ? (
            <img src={logo} alt="Logo" className="h-9 object-contain" />
          ) : (
            <div className="flex items-center gap-1.5">
              <div className="h-7 w-7 bg-slate-900 rounded flex items-center justify-center text-white font-black text-sm">P</div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold leading-none text-[10px]">PROVEIN</span>
                <span className="text-[7px] text-slate-500 uppercase tracking-tighter">Corp</span>
              </div>
            </div>
          )}
        </div>
        <div className="w-1/3 text-right">
          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Normativa</div>
          <div className="text-[9px] font-mono text-slate-600 font-bold">{document.code}</div>
          <div className="text-[7px] text-slate-400 flex items-center justify-end gap-2">
            <span>{document.version}</span>
            <span className="bg-slate-100 px-1 rounded text-slate-500 font-bold">PÁGINA 1 DE {document.pageCount}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative">
        {/* Title Area */}
        <div className="mb-8 border-b border-slate-50 pb-5 pdf-item">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-1 bg-corporate-accent rounded-full"></div>
            <span className="text-[9px] font-bold text-corporate-accent tracking-widest uppercase">{document.companyName}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight uppercase tracking-tight">
            {document.title}
          </h1>
          {document.subtitle && (
            <p className="text-sm text-slate-500 font-light leading-snug">
              {document.subtitle}
            </p>
          )}
        </div>

        {/* Sections Flow */}
        {document.sections.map((section, index) => (
          <React.Fragment key={section.id}>
            <div className="mb-8 section-container">
                {/* section-title class added for CSS rule page-break-after: avoid */}
                <div 
                  className="section-title flex items-baseline gap-2 mb-3 border-b border-slate-100 pb-1 pdf-item"
                  style={{ pageBreakAfter: 'avoid' }}
                >
                  <span className="text-sm font-black text-slate-300">{section.number}.</span>
                  <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.blocks.map((block, bIdx) => (
                    <RenderBlock key={bIdx} block={block} />
                  ))}
                </div>
            </div>
            
            {/* Visual Page Break Preview (skips last section) */}
            {index < document.sections.length - 1 && (
               <div className="relative border-t-2 border-dashed border-slate-200 my-8 py-2 text-center print:hidden no-print select-none group">
                  <span className="bg-slate-100 text-slate-400 text-[9px] px-2 py-1 rounded font-mono uppercase tracking-widest group-hover:text-slate-600 transition-colors">
                    Fin de sección - Salto de página sugerido
                  </span>
               </div>
            )}
          </React.Fragment>
        ))}

        {/* Footer Clean-up */}
        <div className="mt-10 pt-4 border-t border-slate-100 text-center text-[8px] text-slate-400 pdf-item">
          <p className="mb-1 uppercase tracking-widest">{document.companyName}</p>
          <p className="font-mono opacity-60">ID: {document.id} | REV: {document.updatedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;