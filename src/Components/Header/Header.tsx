import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/Components/ui/hover-card";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";

function Header() {
  return (
    <section className="Header__Section">
      <div className="Title__Div">
        <h1 className="SpinHub__Title animate__animated animate__zoomInUp">
          Welcome to SpinHub!
        </h1>
        <p className="SpinHub__Title__Description animate__animated animate__fadeInDown animate__delay-1s">
          Discover Random Delights with Every Spin!
        </p>
      </div>

      <Sheet>
        <SheetTrigger className="text-color">Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="Icon__Container">
            <div className="Icon">
              <span className="material-icons">settings</span>
            </div>
            <div className="Account__Button">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="Icon">
                    <span className="material-icons">account_circle</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/Img/ProfileTest/Bobby.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@Bob</h4>
                      <p className="text-sm">
                        Bob, the eccentric inventor with a penchant for speaking
                        in rhymes.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="Translate__Button">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="Icon">
                    <span className="material-icons">translate</span>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80 grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Language</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the language for the site.
                    </p>
                  </div>
                  <Button variant="outline">English</Button>
                  <Button variant="outline">French</Button>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default Header;
