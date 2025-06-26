import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react";

export function InformationBalloon({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Tooltip data-slot="information-balloon">
      <TooltipTrigger className={`text-card-foreground rounded-full hover:shadow-md ${className}`}
      ><InfoIcon className="w-4 h-4" /></TooltipTrigger>
      <TooltipContent>
        {children}
      </TooltipContent>
    </Tooltip>
  );
}