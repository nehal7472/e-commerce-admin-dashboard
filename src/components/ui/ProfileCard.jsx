import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, MapPin, Users } from "lucide-react";

export default function ProfileCard({
  name,
  subName,
  title,
  subTitle,
  text,
  subText,
  image
}) {
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-md p-6">
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src={image}
            alt="User Avatar"
          />
          <AvatarFallback>CR</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{subName}</p>
        </div>
        <div className="w-full space-y-4 pt-2 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <Users className="w-4 h-4 text-gray-500" />
            <span>
              {title} <strong>9,520</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span>
              {subTitle} <strong>Undefined, Minnesota 40, United States</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarDays className="w-4 h-4 text-gray-500" />
            <span>
              {text} <strong>September 30, 2019 1:49 PM</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarDays className="w-4 h-4 text-gray-500" />
            <span>
              {subText} <strong>February 14, 2020 7:52 AM</strong>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
