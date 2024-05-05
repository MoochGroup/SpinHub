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

function Header() {
  return (
    <div className="Sidebar">
      <div className="Sidebar__Content">
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
                    Bob, the eccentric inventor with a penchant for speaking in
                    rhymes.
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
    </div>
  );
}

export default Header;
