
import { useEffect, useState } from 'react';
import SortingBars from './SortingBars';
import VisualizerControls from './VisualizerControls';
import AlgorithmInfo from './AlgorithmInfo';
import { ArrayBar, SortingAlgorithm } from '@/types/sortingTypes';
import { 
  algorithmInfoMap, 
  generateRandomArray, 
  startSorting 
} from '@/utils/sortingAlgorithms';
import { toast } from 'sonner';

const VisualizerContainer = () => {
  const [array, setArray] = useState<ArrayBar[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithm>('bubble');
  const [arraySize, setArraySize] = useState(40);
  const [speed, setSpeed] = useState(100); // Lower value = faster
  const [isSorting, setIsSorting] = useState(false);

  // Generate initial array
  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  const generateNewArray = () => {
    const newArray = generateRandomArray(arraySize, 90);
    setArray(newArray);
  };

  const handleAlgorithmChange = (algorithm: SortingAlgorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const handleArraySizeChange = (size: number) => {
    setArraySize(size);
  };

  const handleSpeedChange = (newSpeed: number) => {
    // Invert the speed value so that higher slider value = slower speed
    // This is more intuitive for users
    setSpeed(newSpeed);
  };

  const handleStartSorting = async () => {
    if (isSorting) return;
    
    setIsSorting(true);
    toast(`Running ${algorithmInfoMap[selectedAlgorithm].name}`);
    
    try {
      await startSorting(
        selectedAlgorithm,
        array,
        setArray,
        speed
      );
      toast.success(`${algorithmInfoMap[selectedAlgorithm].name} complete!`);
    } catch (error) {
      console.error("Sorting error:", error);
      toast.error("An error occurred during sorting");
    } finally {
      setIsSorting(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <VisualizerControls 
        selectedAlgorithm={selectedAlgorithm}
        onAlgorithmChange={handleAlgorithmChange}
        onArraySizeChange={handleArraySizeChange}
        onSpeedChange={handleSpeedChange}
        onGenerateNewArray={generateNewArray}
        onStartSorting={handleStartSorting}
        arraySize={arraySize}
        speed={speed}
        isSorting={isSorting}
      />
      
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <SortingBars array={array} containerHeight={400} />
        </div>
        <div className="md:col-span-1">
          <AlgorithmInfo info={algorithmInfoMap[selectedAlgorithm]} />
        </div>
      </div>
    </div>
  );
};

export default VisualizerContainer;
