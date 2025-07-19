import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus, Trash } from "lucide-react";

export default function NewUser() {
  return (
    <Card className="p-6 sm:p-8 space-y-10 shadow-xl rounded-2xl">
      {/* Campaign Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            1
          </div>
          <h2 className="text-lg font-semibold">Campaign info</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Input placeholder="ex. Birthday Offer" className="w-full" />
          <Input
            value="Hard Rock cafe, Koregaon park"
            readOnly
            className="w-full"
          />
          <Input value="Email, SMS" readOnly className="w-full" />
        </div>
      </div>

      {/* Audience */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            2
          </div>
          <h2 className="text-lg font-semibold">Audience</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Input value="5,000" readOnly className="w-full" />
          <Input value="2,750" readOnly className="w-full" />
          <Input value="2,250" readOnly className="w-full" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Customers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Customers</SelectItem>
              <SelectItem value="active">Active Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Time Manage */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            3
          </div>
          <h2 className="text-lg font-semibold">Time manage</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Every hour" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hour">Every hour</SelectItem>
              <SelectItem value="day">Every day</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-col">
            <Input value="Active days" readOnly className="w-full" />
            <p className="text-xs text-muted-foreground mt-1">
              12 Feb 2020 - 20 Jun 2020
            </p>
          </div>
        </div>
      </div>

      {/* Create Rules */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            4
          </div>
          <h2 className="text-lg font-semibold">Create Rules</h2>
        </div>

        {/* Rule Sections */}
        {["If", "And", "Then"].map((label, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 ml-6 relative border-l-2 border-orange-500 pl-6"
          >
            <div className="absolute -left-[26px] top-2 w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-gray-700 w-12">
                {label}
              </span>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Spend" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spend">Spend</SelectItem>
                  <SelectItem value="clicks">Clicks</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="=" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=">">&gt;</SelectItem>
                  <SelectItem value="<">&lt;</SelectItem>
                  <SelectItem value="=">=</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="$100" className="w-24" />

              <Button size="icon" variant="ghost">
                <Trash className="w-4 h-4 text-gray-400" />
              </Button>
            </div>

            {label === "If" && (
              <Button variant="link" size="sm" className="pl-10 text-blue-600">
                + Add Condition
              </Button>
            )}
            {label === "And" && (
              <Button variant="link" size="sm" className="pl-10 text-blue-600">
                + Action
              </Button>
            )}
            {label === "Then" && (
              <Button variant="link" size="sm" className="pl-10 text-blue-600">
                + Nested condition
              </Button>
            )}
          </div>
        ))}

        {/* New Rule */}
        <Button variant="link" className="text-sm text-blue-600 pl-6">
          <Plus className="w-4 h-4 mr-1" />
          New Rule
        </Button>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
        <Button variant="ghost" className="w-full sm:w-auto">
          Cancel
        </Button>
        <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
          Save Campaign
        </Button>
      </div>
    </Card>
  );
}
