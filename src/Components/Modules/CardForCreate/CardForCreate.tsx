import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Checkbox } from "@/Components/ui/checkbox";
import { Slider } from "@/Components/ui/slider";
import { Switch } from "@/Components/ui/switch";
import { useState } from "react";

function CardForCreate() {
  const [addPrizeNumber, setAddPrizeNumber] = useState<boolean>(false);
  const [customBackgroundColors, setCustomBackgroundColors] = useState<boolean>(false);

  /*Handle Checkboxes*/
  const handleCheckboxChange = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    setState(prevValue => !prevValue);
  };

  return (
    <Card className="w-[600px] CreateWheelOptions">
      <CardHeader>
        <CardTitle>Create Wheel</CardTitle>
        <CardDescription>Deploy your new wheel in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {/* Wheel Name */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your wheel" />
            </div>

            {/* Prize Number */}
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center space-x-2">
              <Switch id="boolOptions" checked={addPrizeNumber} onCheckedChange={() => handleCheckboxChange(setAddPrizeNumber)} />
              <Label htmlFor="boolOptions">Add winning prize</Label>
                
              </div>
              {addPrizeNumber && (
                <div>
                  <Label htmlFor="prizeNumber">Prize number</Label>
                  <Input type="number" id="prizeNumber" placeholder="0 to ∞ $" />
                </div>
              )}
            </div>

            {/* Data */}




            {/* Custom Background Colors */}
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center space-x-2">
              <Switch id="boolOptions" checked={customBackgroundColors} onCheckedChange={() => handleCheckboxChange(setCustomBackgroundColors)} />
              <Label htmlFor="boolOptions">Add custom background colors</Label>
                
              </div>
              {customBackgroundColors && (
                <div>
                  <Label htmlFor="prizeNumber">Custom background colors</Label>
                  <Input type="color" id="prizeNumber" placeholder="0 to ∞ $" />
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="boolOptions">Extra Options</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="boolOptions" />
                <Label htmlFor="boolOptions">
                  Start spinning on create
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="boolOptions" />
                <Label htmlFor="boolOptions">
                  Disable initial animation
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="boolOptions" />
                <Label htmlFor="boolOptions">Make text perpendicular</Label>
              </div>
            </div>
            {/* <Slider defaultValue={[33]} max={100} step={1} /> */}
          </div>
        </form>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Next</Button>
      </CardFooter> */}
    </Card>
  );
}

export default CardForCreate;
