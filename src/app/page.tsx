import { auth } from "@/auth";
import Carousel from "@/components/home/carousel";
import { Navbar } from "@/components/home/navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const session = auth()
  console.log(`this seesion is null: ${session}`)
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Foodie!</h1>
        <p className="text-lg mb-8">
          Discover a world of delicious flavors and culinary delights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Featured Dish</CardTitle>
              <CardDescription>
                Indulge in our mouthwatering dish of the day.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc,
                eget aliquam nisl nunc eget nisl.
              </p>
            </CardContent>
            <CardFooter>

            </CardFooter>
            </Card>
        </div>
      </div>
      </div>
        )
};
