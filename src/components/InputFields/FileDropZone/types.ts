export type TFile = File &
  Partial<{
    url: string;
    meta: {
      name: string;
      description: string;
    };
    onProgress?: (value: number) => void;
  }>;
