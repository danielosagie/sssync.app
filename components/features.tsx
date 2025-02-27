import { cn } from "@/lib/utils";

export function FeatureGridItem(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background/50 p-2 transition-colors hover:bg-accent/10">
      <div className="flex h-[180px] flex-col rounded-md p-6 gap-4">
        <div className="w-full h-16 bg-lime-600 bg-opacity-10 rounded-lg overflow-hidden">
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
      className={cn("container space-y-10 py-8 md:py-12 lg:py-24", className)}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-lime-600">
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
              "p-6 rounded-lg border bg-opacity-10 bg-background shadow-sm min-h-[300px] flex flex-col justify-between",
              index >= 3 ? "hidden md:block" : ""
            )}
          >
            <div className="space-y-4">
              <div className="w-fit flex items-center justify-center h-16 bg-lime-600 bg-opacity-10 rounded-lg p-4">
                <div className="h-8 w-full text-lime-600">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mx-auto mt-16 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Why sssync.app is the <span className="text-lime-600">Right Choice?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border-0 bg-slate-100/5 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">For Sellers</h3>
            <h4 className="text-lg font-medium text-lime-600 mb-2">Never lose a sale again. Sync inventory. Share resources. Grow together.</h4>
            <p className="text-muted-foreground mb-6">Seamlessly connect your Square and Shopify inventory while tapping into a network of partner stores to handle stockouts and share excess inventory.</p>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5 bg-white/5 p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-1.5 bg-lime-600 bg-opacity-10 rounded-md text-lime-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Real-Time Inventory Sync</span>
                </div>
                <p className="text-sm text-muted-foreground pl-9">Keep your Square POS and Shopify store perfectly in sync, eliminating manual updates and preventing embarrassing stockouts.</p>
              </div>
              
              <div className="flex flex-col gap-1.5 bg-white/5 p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-1.5 bg-lime-600 bg-opacity-10 rounded-md text-lime-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Sales Recovery Engine</span>
                </div>
                <p className="text-sm text-muted-foreground pl-9">The average retailer loses 10-15% of potential sales to stockouts. We automatically route orders to trusted partner stores who have the inventory.</p>
              </div>
              
              <div className="flex flex-col gap-1.5 bg-white/5 p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-1.5 bg-lime-600 bg-opacity-10 rounded-md text-lime-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Excess Inventory Monetization</span>
                </div>
                <p className="text-sm text-muted-foreground pl-9">Turn your excess inventory into profit by making it available to other merchants in our network.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border-0 bg-slate-100/5 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">For Marketplace Owners</h3>
            <h4 className="text-lg font-medium text-lime-600 mb-2">Your inventory limitations end today. Your marketplace begins tomorrow.</h4>
            <p className="text-muted-foreground mb-6">Transform your store into a thriving marketplace by connecting with trusted partner stores and expanding your product offerings—without the inventory risk.</p>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5 bg-white/5 p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-1.5 bg-lime-600 bg-opacity-10 rounded-md text-lime-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Instant Product Catalog Expansion</span>
                </div>
                <p className="text-sm text-muted-foreground pl-9">Expand your product catalog by 300% without purchasing a single additional item by connecting with complementary stores.</p>
              </div>
              
              <div className="flex flex-col gap-1.5 bg-white/5 p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-1.5 bg-lime-600 bg-opacity-10 rounded-md text-lime-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Risk-Free Inventory Model</span>
                </div>
                <p className="text-sm text-muted-foreground pl-9">Sell products you don&apos;t physically stock. Orders for partner products automatically route to them for fulfillment.</p>
              </div>
              
              <div className="flex flex-col gap-1.5 bg-white/5 p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-1.5 bg-lime-600 bg-opacity-10 rounded-md text-lime-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="font-medium">White-Labeled Experience</span>
                </div>
                <p className="text-sm text-muted-foreground pl-9">Your customers never know the difference. Everything maintains your branding and customer experience standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
