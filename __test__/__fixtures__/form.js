/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WfjCkNNqj9B
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component({ xstyle }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Uniswap Slot0 Information</CardTitle>
        <CardDescription>
          Detailed pool data for the selected Uniswap slot0.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className={cn("grid grid-cols-2 gap-4 text-sm", xstyle)}>
          <div className={twMerge(xstyle, "flex flex-col space-y-1.5")}>
            <Label htmlFor="sqrtPriceX96">Sqrt Price X96</Label>
            <Input disabled id="sqrtPriceX96" placeholder="Sqrt Price X96" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="tick" className="flex flex-col space-y-1.5">
              Tick
            </Label>
            <Input
              disabled
              id="tick"
              placeholder="Tick"
              className={cn("flex flex-col space-y-1.5", xstyle)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="observationIndex">Observation Index</Label>
            <Input
              disabled
              id="observationIndex"
              placeholder="Observation Index"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="observationCardinality">
              Observation Cardinality
            </Label>
            <Input
              disabled
              id="observationCardinality"
              placeholder="Observation Cardinality"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="observationCardinalityNext">
              Observation Cardinality Next
            </Label>
            <Input
              disabled
              id="observationCardinalityNext"
              placeholder="Observation Cardinality Next"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="feeProtocol">Fee Protocol</Label>
            <Input disabled id="feeProtocol" placeholder="Fee Protocol" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="unlocked">Unlocked</Label>
            <Input disabled id="unlocked" placeholder="Unlocked" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Refresh</Button>
        <Link className="text-blue-500" href="#">
          More Details
        </Link>
      </CardFooter>
    </Card>
  );
}
