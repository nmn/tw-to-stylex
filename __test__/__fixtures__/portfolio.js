/**
 * v0 by Vercel.
 * @see https://v0.dev/t/u18ILcKLQhV
 */
import Link from "next/link";
import { CardHeader, CardFooter, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="w-full py-12">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <IconMountain className="h-6 w-6" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Education
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Welcome to My Portfolio
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            A high school student aspiring to innovate and create.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="container px-4 md:px-6 py-12" id="about">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          About Me
        </h2>
        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          I am a high school student passionate about technology and problem
          solving. I enjoy coding, robotics, and exploring new technologies.
        </p>
      </div>
      <div className="container px-4 md:px-6 py-12" id="education">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Education
        </h2>
        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          I am currently attending XYZ High School with an expected graduation
          year of 2025.
        </p>
      </div>
      <div
        className="container px-4 md:px-6 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        id="projects"
      >
        <Card>
          <CardHeader
            style={tw("text-lg font-bold text-gray-500 dark:text-gray-400")}
          >
            <h3 className="text-lg font-bold">Project 1</h3>
          </CardHeader>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is a brief description of my project. It includes details
              about the technologies I used and the problems I solved.
            </p>
          </div>
          <CardFooter>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              View Project
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold">Project 2</h3>
          </CardHeader>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is a brief description of my project. It includes details
              about the technologies I used and the problems I solved.
            </p>
          </div>
          <CardFooter>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              View Project
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold">Project 3</h3>
          </CardHeader>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is a brief description of my project. It includes details
              about the technologies I used and the problems I solved.
            </p>
          </div>
          <CardFooter>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              View Project
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="container px-4 md:px-6 py-12" id="contact">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Contact Me
        </h2>
        <form className="w-full max-w-lg mx-auto mt-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <Input id="grid-first-name" placeholder="Name" type="text" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Email
              </label>
              <Input id="grid-last-name" placeholder="Email" type="email" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <Input
                id="grid-password"
                placeholder="Your message"
                type="text"
              />
            </div>
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
}

function IconMountain(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
