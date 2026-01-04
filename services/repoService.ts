import { useState, useEffect, useCallback } from 'react';
import { DocumentData } from '../types';
import { INITIAL_DOCUMENTS } from '../constants';

export const useRepository = () => {
  const [documents, setDocuments] = useState<DocumentData[]>(INITIAL_DOCUMENTS);
  const [logo, setLogo] = useState<string | null>(null);
  const [activeDocId, setActiveDocId] = useState<string>(INITIAL_DOCUMENTS[0].id);

  const activeDocument = documents.find(d => d.id === activeDocId) || documents[0];

  const uploadLogo = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const selectDocument = (id: string) => {
    setActiveDocId(id);
  };

  return {
    documents,
    activeDocument,
    logo,
    uploadLogo,
    selectDocument,
  };
};
