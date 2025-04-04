
import { AlgorithmInfo as AlgorithmInfoType } from "@/types/sortingTypes";
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

interface AlgorithmInfoProps {
  info: AlgorithmInfoType | null;
}

const AlgorithmInfo = ({ info }: AlgorithmInfoProps) => {
  if (!info) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{info.name}</CardTitle>
        <CardDescription>Algorithm Details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm">{info.description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Time Complexity</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Best:</span>
                <span className="text-xs font-medium">{info.timeComplexity.best}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Average:</span>
                <span className="text-xs font-medium">{info.timeComplexity.average}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Worst:</span>
                <span className="text-xs font-medium">{info.timeComplexity.worst}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Space Complexity</h4>
            <div className="text-xs font-medium">{info.spaceComplexity}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlgorithmInfo;
