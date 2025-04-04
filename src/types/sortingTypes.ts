
export type SortingAlgorithm = 
  | 'bubble'
  | 'selection'
  | 'insertion'
  | 'merge'
  | 'quick';

export type ArrayBar = {
  value: number;
  state: 'default' | 'comparing' | 'sorted' | 'swapping';
};

export interface AlgorithmInfo {
  name: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  description: string;
}
