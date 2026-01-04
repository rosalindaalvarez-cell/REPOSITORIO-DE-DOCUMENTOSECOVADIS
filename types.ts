export enum BlockType {
  PARAGRAPH = 'paragraph',
  HEADER = 'header',
  LIST = 'list',
  TABLE = 'table',
  GRID_CARDS = 'grid_cards', // For boxes like "Certeza Técnica" or "10 Rules"
  HIGHLIGHT = 'highlight', // For blue left-border blocks
  FORMULA = 'formula', // For the math box
  SIGNATURE = 'signature',
}

export interface ContentBlock {
  type: BlockType;
  content: any; // Flexible content based on type
  title?: string;
  options?: {
    columns?: number; // For grids
    highlightColor?: string;
    isOrdered?: boolean; // For lists
  };
}

export interface Section {
  id: string;
  title: string;
  number?: string; // e.g. "I", "II"
  blocks: ContentBlock[];
}

export interface DocumentData {
  id: string;
  title: string;
  subtitle?: string;
  code: string;
  version: string;
  pageCount: number;
  updatedAt: string;
  companyName: string;
  sections: Section[];
}

export interface TableColumn {
  header: string;
  accessor: string;
  width?: string;
}

export interface TableData {
  columns: TableColumn[];
  rows: Record<string, string | number>[];
}

export interface GridCard {
  title?: string;
  number?: string;
  text: string;
}

export interface Signature {
  role: string;
  area: string;
}
