// import { useState } from 'react'
// import { Wheel } from 'react-custom-roulette'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/Components/ui/context-menu"


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




    <ContextMenu>
    <div className="test-wrapper">
    <div className="test-border"></div>
    <div className="test-content">
        <ContextMenuTrigger className="color-text">
            Right click here
        </ContextMenuTrigger>
    </div>
</div>

      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>  
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
 


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