import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="max-w-lg w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Thank You for Joining Our Waitlist!</CardTitle>
          <CardDescription className="text-lg mt-2">
            Your submission has been received successfully.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              We'll review your application and send you an email when you're accepted into the beta program.
              Keep an eye on your inbox for updates!
            </p>
            <p className="text-muted-foreground">
              In the meantime, feel free to follow us on social media for the latest updates.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/">
              <Button>
                Return to Homepage
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 