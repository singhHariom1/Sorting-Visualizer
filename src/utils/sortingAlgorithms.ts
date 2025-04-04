
import { AlgorithmInfo, ArrayBar } from "@/types/sortingTypes";

// Delay function for visualizing the algorithm steps
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Information about each algorithm
export const algorithmInfoMap: Record<string, AlgorithmInfo> = {
  bubble: {
    name: "Bubble Sort",
    timeComplexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(1)",
    description: "Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until no swaps are needed.",
  },
  selection: {
    name: "Selection Sort",
    timeComplexity: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(1)",
    description: "Selection sort divides the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly finds the minimum element from the unsorted sublist and puts it at the end of the sorted sublist.",
  },
  insertion: {
    name: "Insertion Sort",
    timeComplexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(1)",
    description: "Insertion sort builds the final sorted array one element at a time. It is efficient for small data sets or mostly sorted arrays.",
  },
  merge: {
    name: "Merge Sort",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(n)",
    description: "Merge sort is a divide and conquer algorithm that was invented by John von Neumann. It divides the input array into two halves, recursively sorts them, and then merges the sorted halves.",
  },
  quick: {
    name: "Quick Sort",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(log n)",
    description: "Quick sort is a divide and conquer algorithm that selects a 'pivot' element and partitions the array around the pivot, placing smaller elements before it and larger ones after it.",
  }
};

// Generate a new random array
export const generateRandomArray = (size: number, max: number): ArrayBar[] => {
  return Array.from({ length: size }, () => ({
    value: Math.floor(Math.random() * max) + 10,
    state: 'default'
  }));
};

// Bubble Sort implementation
export async function bubbleSort(
  array: ArrayBar[],
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  speed: number
): Promise<void> {
  const arr = [...array];
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Highlight elements being compared
      arr[j] = { ...arr[j], state: 'comparing' };
      arr[j + 1] = { ...arr[j + 1], state: 'comparing' };
      setArray([...arr]);
      await sleep(speed);
      
      if (arr[j].value > arr[j + 1].value) {
        // Swap elements
        arr[j] = { ...arr[j], state: 'swapping' };
        arr[j + 1] = { ...arr[j + 1], state: 'swapping' };
        setArray([...arr]);
        await sleep(speed);
        
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        
        setArray([...arr]);
        await sleep(speed);
      }
      
      // Reset state
      arr[j] = { ...arr[j], state: 'default' };
      arr[j + 1] = { ...arr[j + 1], state: 'default' };
      setArray([...arr]);
    }
    
    // Mark as sorted
    arr[n - i - 1] = { ...arr[n - i - 1], state: 'sorted' };
    setArray([...arr]);
  }
  
  // Mark all as sorted when done
  for (let i = 0; i < n; i++) {
    arr[i] = { ...arr[i], state: 'sorted' };
  }
  setArray([...arr]);
}

// Selection Sort implementation
export async function selectionSort(
  array: ArrayBar[],
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  speed: number
): Promise<void> {
  const arr = [...array];
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    arr[i] = { ...arr[i], state: 'comparing' };
    setArray([...arr]);
    await sleep(speed);
    
    for (let j = i + 1; j < n; j++) {
      arr[j] = { ...arr[j], state: 'comparing' };
      setArray([...arr]);
      await sleep(speed);
      
      if (arr[j].value < arr[minIndex].value) {
        if (minIndex !== i) {
          arr[minIndex] = { ...arr[minIndex], state: 'default' };
        }
        minIndex = j;
      } else {
        arr[j] = { ...arr[j], state: 'default' };
      }
      
      setArray([...arr]);
      await sleep(speed);
    }
    
    if (minIndex !== i) {
      arr[minIndex] = { ...arr[minIndex], state: 'swapping' };
      arr[i] = { ...arr[i], state: 'swapping' };
      setArray([...arr]);
      await sleep(speed);
      
      // Swap
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      
      setArray([...arr]);
      await sleep(speed);
      
      arr[minIndex] = { ...arr[minIndex], state: 'default' };
    }
    
    arr[i] = { ...arr[i], state: 'sorted' };
    setArray([...arr]);
  }
  
  arr[n - 1] = { ...arr[n - 1], state: 'sorted' };
  setArray([...arr]);
}

// Insertion Sort implementation
export async function insertionSort(
  array: ArrayBar[],
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  speed: number
): Promise<void> {
  const arr = [...array];
  const n = arr.length;
  
  // Mark the first element as sorted
  arr[0] = { ...arr[0], state: 'sorted' };
  setArray([...arr]);
  await sleep(speed);
  
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    arr[i] = { ...arr[i], state: 'comparing' };
    setArray([...arr]);
    await sleep(speed);
    
    let j = i - 1;
    
    while (j >= 0 && arr[j].value > key.value) {
      arr[j] = { ...arr[j], state: 'comparing' };
      setArray([...arr]);
      await sleep(speed);
      
      arr[j + 1] = arr[j];
      arr[j + 1] = { ...arr[j + 1], state: 'swapping' };
      setArray([...arr]);
      await sleep(speed);
      
      arr[j + 1] = { ...arr[j + 1], state: 'sorted' };
      j--;
    }
    
    arr[j + 1] = { ...key, state: 'swapping' };
    setArray([...arr]);
    await sleep(speed);
    
    arr[j + 1] = { ...arr[j + 1], state: 'sorted' };
    setArray([...arr]);
    await sleep(speed);
  }
}

// Merge Sort implementation
export async function mergeSort(
  array: ArrayBar[],
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  speed: number
): Promise<void> {
  const arr = [...array];
  
  async function merge(arr: ArrayBar[], left: number, middle: number, right: number): Promise<void> {
    const n1 = middle - left + 1;
    const n2 = right - middle;
    
    // Create temporary arrays
    const L = arr.slice(left, left + n1);
    const R = arr.slice(middle + 1, middle + 1 + n2);
    
    let i = 0;
    let j = 0;
    let k = left;
    
    // Merge the temporary arrays back
    while (i < n1 && j < n2) {
      arr[left + i] = { ...arr[left + i], state: 'comparing' };
      arr[middle + 1 + j] = { ...arr[middle + 1 + j], state: 'comparing' };
      setArray([...arr]);
      await sleep(speed);
      
      if (L[i].value <= R[j].value) {
        arr[k] = { ...L[i], state: 'swapping' };
        i++;
      } else {
        arr[k] = { ...R[j], state: 'swapping' };
        j++;
      }
      
      setArray([...arr]);
      await sleep(speed);
      
      arr[k] = { ...arr[k], state: 'sorted' };
      k++;
      
      setArray([...arr]);
    }
    
    // Copy remaining elements of L
    while (i < n1) {
      arr[k] = { ...L[i], state: 'swapping' };
      setArray([...arr]);
      await sleep(speed);
      
      arr[k] = { ...arr[k], state: 'sorted' };
      i++;
      k++;
      
      setArray([...arr]);
    }
    
    // Copy remaining elements of R
    while (j < n2) {
      arr[k] = { ...R[j], state: 'swapping' };
      setArray([...arr]);
      await sleep(speed);
      
      arr[k] = { ...arr[k], state: 'sorted' };
      j++;
      k++;
      
      setArray([...arr]);
    }
  }
  
  async function sortHelper(arr: ArrayBar[], left: number, right: number): Promise<void> {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);
      
      await sortHelper(arr, left, middle);
      await sortHelper(arr, middle + 1, right);
      await merge(arr, left, middle, right);
    }
  }
  
  await sortHelper(arr, 0, arr.length - 1);
  
  // Mark all as sorted
  for (let i = 0; i < arr.length; i++) {
    arr[i] = { ...arr[i], state: 'sorted' };
  }
  setArray([...arr]);
}

// Quick Sort implementation
export async function quickSort(
  array: ArrayBar[],
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  speed: number
): Promise<void> {
  const arr = [...array];
  
  async function partition(arr: ArrayBar[], low: number, high: number): Promise<number> {
    const pivot = arr[high].value;
    arr[high] = { ...arr[high], state: 'comparing' };
    setArray([...arr]);
    await sleep(speed);
    
    let i = low - 1;
    
    for (let j = low; j <= high - 1; j++) {
      arr[j] = { ...arr[j], state: 'comparing' };
      setArray([...arr]);
      await sleep(speed);
      
      if (arr[j].value < pivot) {
        i++;
        
        arr[i] = { ...arr[i], state: 'swapping' };
        arr[j] = { ...arr[j], state: 'swapping' };
        setArray([...arr]);
        await sleep(speed);
        
        // Swap
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
        setArray([...arr]);
        await sleep(speed);
      }
      
      arr[j] = { ...arr[j], state: 'default' };
      if (i >= low) {
        arr[i] = { ...arr[i], state: 'default' };
      }
    }
    
    arr[high] = { ...arr[high], state: 'swapping' };
    arr[i + 1] = { ...arr[i + 1], state: 'swapping' };
    setArray([...arr]);
    await sleep(speed);
    
    // Swap pivot
    const temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    setArray([...arr]);
    await sleep(speed);
    
    arr[i + 1] = { ...arr[i + 1], state: 'sorted' };
    arr[high] = { ...arr[high], state: 'default' };
    setArray([...arr]);
    
    return i + 1;
  }
  
  async function sortHelper(arr: ArrayBar[], low: number, high: number): Promise<void> {
    if (low < high) {
      const pi = await partition(arr, low, high);
      
      await sortHelper(arr, low, pi - 1);
      await sortHelper(arr, pi + 1, high);
    } else if (low === high) {
      arr[low] = { ...arr[low], state: 'sorted' };
      setArray([...arr]);
    }
  }
  
  await sortHelper(arr, 0, arr.length - 1);
  
  // Mark all as sorted
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].state !== 'sorted') {
      arr[i] = { ...arr[i], state: 'sorted' };
    }
  }
  setArray([...arr]);
}

// Function to start the selected sorting algorithm
export const startSorting = async (
  algorithm: string,
  array: ArrayBar[],
  setArray: React.Dispatch<React.SetStateAction<ArrayBar[]>>,
  speed: number
): Promise<void> => {
  // Reset array states
  const resetArray = array.map(item => ({ ...item, state: 'default' }));
  setArray(resetArray);
  
  switch (algorithm) {
    case 'bubble':
      await bubbleSort(resetArray, setArray, speed);
      break;
    case 'selection':
      await selectionSort(resetArray, setArray, speed);
      break;
    case 'insertion':
      await insertionSort(resetArray, setArray, speed);
      break;
    case 'merge':
      await mergeSort(resetArray, setArray, speed);
      break;
    case 'quick':
      await quickSort(resetArray, setArray, speed);
      break;
    default:
      break;
  }
};
