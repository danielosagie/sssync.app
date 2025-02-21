export function FeatureGridItem(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background/50 p-2 transition-colors hover:bg-accent/10">
      <div className="flex h-[180px] flex-col rounded-md p-6 gap-4">
        <div className="p-2 rounded-md bg-accent/10 w-fit">
          {props.icon}
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">{props.title}</h3>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export function FeatureGrid(props: {
  title: string;
  subtitle: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}) {
  return (
    <section
      id="features"
      className="container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {props.title}
        </h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg">
          {props.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {props.items.map((item, index) => (
          <div 
            key={index}
            className="p-6 rounded-lg border bg-background shadow-sm min-h-[300px] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center h-16 w-16 bg-green-50 rounded-lg">
                {item.icon}
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
