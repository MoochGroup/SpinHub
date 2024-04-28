import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"

function Header() {

  return (
    <section className="Header__Section">

    <div className="Title__Div">
      <h1 className="SpinHub__Title animate__animated animate__zoomInUp">Welcome to SpinHub!</h1>
      <p className="SpinHub__Title__Description animate__animated animate__fadeInDown animate__delay-1s">Discover Random Delights with Every Spin!</p>
    </div>

    <div className="Icon__Container">
      <div className="Account__Icon"><span className="material-icons">account_circle</span></div>
      <div className="Account__Icon"><span className="material-icons">settings</span></div>
      <div className="Account__Icon"><span className="material-icons">translate</span></div>
    </div>


    <Popover>
      <PopoverTrigger asChild>
        {/* <Button variant="outline">Open popover</Button> */}
        <button>open</button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              {/* <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              /> */}
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              {/* <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              /> */}
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              {/* <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              /> */}
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              {/* <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              /> */}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
    
  </section>
  );
}

export default Header;
