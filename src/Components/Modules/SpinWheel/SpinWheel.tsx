// import { useState } from 'react'
// import { Wheel } from 'react-custom-roulette'
import { Button } from "@/Components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/Components/ui/drawer";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

import { Checkbox } from "@/Components/ui/checkbox";
import { Slider } from "@/Components/ui/slider";
import { Switch } from "@/Components/ui/switch";

function SpinWheel() {
  // const data = [
  //   { option: '0' },
  //   { option: '1' },
  //   { option: '2' },
  // ]

  // const [mustSpin, setMustSpin] = useState(false);
  // const [prizeNumber, setPrizeNumber] = useState(0);

  // const handleSpinClick = () => {
  //   if (!mustSpin) {
  //     const newPrizeNumber = Math.floor(Math.random() * data.length);
  //     setPrizeNumber(newPrizeNumber);
  //     setMustSpin(true);
  //   }
  // }

  return (
    <section>
      <div className="test-wrapper">
        <div className="test-border"></div>
        <div className="test-content">
          <Drawer>
            <DrawerTrigger className="color-text">Click here</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Framework</Label>
                        <Select>
                          <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" />
                          <Label htmlFor="terms">
                            Accept terms and conditions
                          </Label>
                          <Checkbox id="terms" />
                          <Label htmlFor="terms">
                            Accept terms and conditions
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" />
                          <Label htmlFor="terms">
                            Accept terms and conditions
                          </Label>
                          <Checkbox id="terms" />
                          <Label htmlFor="terms">
                            Accept terms and conditions
                          </Label>
                        </div>
                      </div>
                      <Slider defaultValue={[33]} max={100} step={1} />
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* <a onClick={handleSpinClick}>
    <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428', '#fff']}
        pointerProps={{src: '/img/MoochPointerTest2.png'}}

        // Gestion Border extérieur 
        outerBorderColor={"#fff"}
        outerBorderWidth={2}

        innerBorderWidth={50}

        // Gestion border intérieur
        radiusLineColor={"#fff"}
        radiusLineWidth={2}

        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      </a>
       */}
    </section>
  );
}
export default SpinWheel;
