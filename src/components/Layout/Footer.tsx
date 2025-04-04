import { GithubIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Sortify. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a
            href="https://github.com/singhHariom1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span>
              Made by{" "}
              <span className="font-semibold text-black">Hariom Singh</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
