import { cn } from "@/lib/utils";

export function FeatureGridItem(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background/50 p-2 transition-colors hover:bg-accent/10">
      <div className="flex h-[180px] flex-col rounded-md p-6 gap-4">
        <div className="w-full h-16 bg-green-100 rounded-lg overflow-hidden">
          <div 
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'scrollLeft 10s linear infinite',
              padding: '0.5rem'
            }}
          >
            {Array(20).fill(null).map((_, index) => (
              <div 
                key={index}
                style={{
                  flexShrink: 0,
                  width: '2rem',
                  height: '2rem',
                  marginRight: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {props.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">{props.title}</h3>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

interface FeatureGridProps {
  title: string;
  subtitle: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}

export function FeatureGrid({ title, subtitle, items, className }: FeatureGridProps) {
  return (
    <section
      id="features"
      className={cn("container space-y-6 py-8 md:py-12 lg:py-24", className)}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {title}
        </h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={index}
            className={cn(
              "p-6 rounded-lg border bg-background shadow-sm min-h-[300px] flex flex-col justify-between",
              index >= 3 ? "hidden md:block" : ""
            )}
          >
            <div className="space-y-4">
              <div className="w-fit flex items-center justify-center h-16 bg-green-100 rounded-lg p-4">
                <div className="h-8 w-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
