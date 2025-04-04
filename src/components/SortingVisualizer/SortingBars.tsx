
import { ArrayBar } from "@/types/sortingTypes";
import { cn } from "@/lib/utils";

interface SortingBarsProps {
  array: ArrayBar[];
  containerHeight: number;
}

const SortingBars = ({ array, containerHeight }: SortingBarsProps) => {
  const getBarColor = (state: ArrayBar['state']) => {
    switch (state) {
      case 'comparing':
        return 'bg-yellow-500';
      case 'swapping':
        return 'bg-purple-500';
      case 'sorted':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getBarAnimation = (state: ArrayBar['state']) => {
    switch (state) {
      case 'comparing':
        return 'animate-bar-compare';
      case 'swapping':
        return 'animate-bar-swap';
      default:
        return '';
    }
  };

  return (
    <div 
      className="w-full flex items-end justify-center gap-1 p-4 bg-card rounded-lg shadow-inner"
      style={{ height: `${containerHeight}px` }}
    >
      {array.map((item, index) => {
        const barHeight = (item.value / 100) * (containerHeight - 50);
        return (
          <div
            key={index}
            className={cn(
              "rounded-t-sm transition-all flex-1 min-w-1",
              getBarColor(item.state),
              getBarAnimation(item.state)
            )}
            style={{ height: `${barHeight}px` }}
          />
        );
      })}
    </div>
  );
};

export default SortingBars;
