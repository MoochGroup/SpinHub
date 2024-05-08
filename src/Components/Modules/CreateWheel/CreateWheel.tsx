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

import CardForCreate from "../CardForCreate/CardForCreate";

function CreateWheel() {
  return (
    <Drawer>
      <DrawerTrigger className="color-text">Click here</DrawerTrigger>
      <DrawerContent className="Drawer">
        <DrawerHeader>
          <DrawerTitle>Create a new wheel</DrawerTitle>
          <DrawerDescription>Create your new wheel however you desire</DrawerDescription>
        </DrawerHeader>

          <CardForCreate />

        <DrawerFooter>
          <Button className="CreateButton">Create new wheel</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
export default CreateWheel;
