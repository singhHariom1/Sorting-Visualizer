
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  PlayCircle, 
  PauseCircle, 
  RefreshCw, 
  BarChart2
} from "lucide-react";
import { SortingAlgorithm } from "@/types/sortingTypes";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface VisualizerControlsProps {
  selectedAlgorithm: SortingAlgorithm;
  onAlgorithmChange: (algorithm: SortingAlgorithm) => void;
  onArraySizeChange: (size: number) => void;
  onSpeedChange: (speed: number) => void;
  onGenerateNewArray: () => void;
  onStartSorting: () => void;
  arraySize: number;
  speed: number;
  isSorting: boolean;
}

const VisualizerControls = ({
  selectedAlgorithm,
  onAlgorithmChange,
  onArraySizeChange,
  onSpeedChange,
  onGenerateNewArray,
  onStartSorting,
  arraySize,
  speed,
  isSorting
}: VisualizerControlsProps) => {
  return (
    <div className="w-full space-y-6 p-6 bg-card rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold">Sorting Controls</h2>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline" 
            onClick={onGenerateNewArray}
            disabled={isSorting}
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            New Array
          </Button>
          
          <Button
            onClick={onStartSorting}
            disabled={isSorting}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            {isSorting ? (
              <>
                <PauseCircle className="w-4 h-4" />
                Sorting...
              </>
            ) : (
              <>
                <PlayCircle className="w-4 h-4" />
                Start Sorting
              </>
            )}
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Algorithm</label>
          <Select
            value={selectedAlgorithm}
            onValueChange={(value) => onAlgorithmChange(value as SortingAlgorithm)}
            disabled={isSorting}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Algorithm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bubble">Bubble Sort</SelectItem>
              <SelectItem value="selection">Selection Sort</SelectItem>
              <SelectItem value="insertion">Insertion Sort</SelectItem>
              <SelectItem value="merge">Merge Sort</SelectItem>
              <SelectItem value="quick">Quick Sort</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Array Size</label>
            <span className="text-sm text-muted-foreground">{arraySize}</span>
          </div>
          <Slider
            value={[arraySize]}
            min={5}
            max={100}
            step={1}
            onValueChange={(value) => onArraySizeChange(value[0])}
            disabled={isSorting}
            className="cursor-pointer"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Speed</label>
            <span className="text-sm text-muted-foreground">
              {speed === 500 ? "Slow" : speed === 100 ? "Medium" : "Fast"}
            </span>
          </div>
          <Slider
            value={[speed]}
            min={10}
            max={500}
            step={10}
            onValueChange={(value) => onSpeedChange(value[0])}
            disabled={isSorting}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default VisualizerControls;
