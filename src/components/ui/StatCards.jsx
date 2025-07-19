import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const statData = [
  {
    title: "Revenue",
    value: "$7,825",
    change: "+22%",
    trendColor: "text-orange-500",
    strokeColor: "stroke-orange-500",
    dotColor: "fill-orange-500",
  },
  {
    title: "Orders",
    value: "920",
    change: "-25%",
    trendColor: "text-red-500",
    strokeColor: "stroke-red-500",
    dotColor: "fill-red-500",
  },
  {
    title: "Visitors",
    value: "15.5K",
    change: "+48%",
    trendColor: "text-green-500",
    strokeColor: "stroke-green-500",
    dotColor: "fill-green-500",
  },
  {
    title: "Conversion",
    value: "28%",
    change: "+1.9%",
    trendColor: "text-yellow-500",
    strokeColor: "stroke-yellow-500",
    dotColor: "fill-yellow-500",
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {statData.map((item) => (
        <Card
          key={item.title}
          className="bg-white shadow rounded-xl px-5 py-4 flex items-center justify-between"
        >
          <CardContent className="p-0 w-full flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">{item.title}</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {item.value}
              </h3>
              <p className={cn("text-sm font-semibold", item.trendColor)}>
                {item.change}
              </p>
            </div>
            <div className="w-20 h-10">
              <svg
                viewBox="0 0 100 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M0,30 Q20,10 40,20 T80,20 Q90,35 100,10"
                  className={cn("stroke-2 fill-none", item.strokeColor)}
                />
                <circle cx="100" cy="10" r="3" className={cn(item.dotColor)} />
              </svg>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;
