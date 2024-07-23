







/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4WxatuGTNhZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <>
      <header className="w-full bg-gray-900 text-white py-6 md:py-8 lg:py-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              alt="School Logo"
              className="h-10 w-10"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <h1 className="text-2xl font-bold">Acme School</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link className="hover:text-gray-300" href="#">
              About Us
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Our Classes
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Facilities
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Contact
            </Link>
          </nav>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main>
        <section className="w-full bg-gray-900 text-white py-12 md:py-16 lg:py-20">
          <div className="container flex flex-col items-center text-center space-y-4">
            <img
              alt="School Logo"
              className="h-20 w-20"
              height={80}
              src="/placeholder.svg"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width={80}
            />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Acme School</h1>
            <p className="max-w-xl text-gray-300 text-lg md:text-xl">
              Providing quality education from 1st grade to +2 level.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20" id="about">
          <div className="container grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Acme School is a leading educational institution that has been providing quality education for over 20
                years. Our dedicated faculty and state-of-the-art facilities ensure that our students receive the best
                possible learning experience.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                We believe in nurturing the intellectual, emotional, and physical growth of our students, preparing them
                for success in their future endeavors.
              </p>
            </div>
            <img
              alt="About Us"
              className="rounded-lg object-cover"
              height={600}
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/600",
                objectFit: "cover",
              }}
              width={800}
            />
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-16 lg:py-20" id="classes">
          <div className="container">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Our Classes</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Explore our wide range of classes from 1st grade to +2 level.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">1st Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Laying the foundation for a strong academic journey.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">2nd Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Developing critical thinking and problem-solving skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">3rd Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">Fostering creativity and independent learning.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">4th Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Expanding knowledge and preparing for the next level.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">5th Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Developing leadership skills and a sense of responsibility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">6th Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Transitioning to a more challenging academic environment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">7th Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Exploring diverse subjects and developing critical thinking.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">8th Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">Preparing for the transition to high school.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">9th Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Developing subject-specific expertise and study skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">10th Grade</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Preparing for board exams and future academic paths.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">+1 Level</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Expanding knowledge and exploring specialized subjects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">+2 Level</h3>
                  <p className="text-gray-500 dark:text-gray-400">Preparing for higher education and future careers.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20" id="facilities">
          <div className="container">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Our Facilities</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Explore the state-of-the-art facilities that support our students' learning and growth.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="space-y-2">
                  <TestTubeIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Science Labs</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Well-equipped laboratories for hands-on learning in science subjects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <BookIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Library</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A vast collection of books and resources to support research and independent learning.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <FanIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Sports Facilities</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Dedicated sports courts and fields for a variety of athletic activities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <ComputerIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Computer Labs</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    State-of-the-art computer labs equipped with the latest technology.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <TheaterIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Auditorium</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A spacious auditorium for school events, performances, and guest lectures.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <CoffeeIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Cafeteria</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A well-equipped cafeteria serving nutritious and delicious meals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-16 lg:py-20" id="contact">
          <div className="container">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Have any questions or want to learn more? Get in touch with us.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" required rows={5} />
                </div>
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-900 text-white py-6 md:py-8 lg:py-10">
        <div className="container flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              alt="School Logo"
              className="h-10 w-10"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <span className="text-sm">© 2024 Acme School</span>
          </div>
          <nav className="flex space-x-6">
            <Link className="hover:text-gray-300" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CoffeeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  )
}


function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function FanIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
      <path d="M12 12v.01" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TestTubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
      <path d="M8.5 2h7" />
      <path d="M14.5 16h-5" />
    </svg>
  )
}


function TheaterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10s3-3 3-8" />
      <path d="M22 10s-3-3-3-8" />
      <path d="M10 2c0 4.4-3.6 8-8 8" />
      <path d="M14 2c0 4.4 3.6 8 8 8" />
      <path d="M2 10s2 2 2 5" />
      <path d="M22 10s-2 2-2 5" />
      <path d="M8 15h8" />
      <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    </svg>
  )
}