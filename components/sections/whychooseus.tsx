import { CheckCircledIcon, RocketIcon } from "@radix-ui/react-icons";
import { 
    RefreshCw,
    BarChart,
  } from "lucide-react";

export function WhyChooseSection() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-lime-600 mb-4">
            Why use <span className="text-black">sssync?</span>
        </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
            {
            icon: (
                <div className="flex justify-left mb-4">
                <RefreshCw className="h-8 w-8" />
                </div>
            ),
            title: "Effortless Connectivity",
            text: "Eliminate manual inventory management and prevent lost sales with our seamless, automated system."
            },
            {
            icon: <RocketIcon className="h-8 w-8" />,
            title: "Risk-Free Sales Growth",
            text: "Turn stockouts into opportunities without needing extra inventory."
            },
            {
            icon: <CheckCircledIcon className="h-8 w-8" />,
            title: "Trust & Transparency",
            text: "Clear ratings, dispute resolution, and automated processes ensure fair partnerships."
            },
            {
            icon: <BarChart className="h-8 w-8" />,
            title: "Scalable & Simple",
            text: "Start with a free tier and upgrade as you grow—our plans meet all business sizes."
            }
        ].map((item, idx) => (
            <div key={idx} className="p-6 bg-background border-2 border-gray-200 rounded-xl">
            <div className="mb-4 text-lime-600">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.text}</p>
            </div>
        ))}
        </div>
    </div>
  );
}
