import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Features", href: "/#features" },
          { title: "Pricing", href: "/#pricing" },
          { title: "FAQ", href: "/#faq" },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="theacsm.com"
        builtByLink="https://theacsm.com"
        githubLink=""
        twitterLink=""
        linkedinLink="https://www.linkedin.com/company/african-caribbean-food-market"
      />
    </div>
  );
}
