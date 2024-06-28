/**
 * v0 by Vercel.
 * @see https://v0.dev/t/C6N83aI7wrP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted">
      <div className="bg-background rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">
          Open Source Thumbnail Generator
        </h1>
        <div className="mb-8">
          <div className="relative w-full max-w-[600px] mx-auto rounded-lg overflow-hidden aspect-[16/9]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex flex-col justify-end p-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                React Hooks
              </h2>
              <p className="text-lg text-white/80">Powerful state management</p>
              <div className="flex items-center gap-2 mt-4">
                <div className="bg-primary rounded-full px-3 py-1 text-primary-foreground text-sm font-medium">
                  React
                </div>
                <div className="bg-primary rounded-full px-3 py-1 text-primary-foreground text-sm font-medium">
                  TypeScript
                </div>
                <div className="bg-primary rounded-full px-3 py-1 text-primary-foreground text-sm font-medium">
                  Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <Label htmlFor="background">Background</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="background"
                  type="color"
                  className="w-16 h-16 p-0 border-none rounded-full"
                  defaultValue="#f0f0f0"
                />
                <Button variant="outline">
                  <UploadIcon className="w-4 h-4 mr-2" />
                  Upload Image
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter a title"
                className="w-full"
                defaultValue="React Hooks"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                type="text"
                placeholder="Enter a subtitle"
                className="w-full"
                defaultValue="Powerful state management"
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Label>Tech Stack</Label>
              <div className="grid grid-cols-3 gap-2">
                <Checkbox id="react" defaultChecked>
                  React
                </Checkbox>
                <Checkbox id="typescript">TypeScript</Checkbox>
                <Checkbox id="tailwind">Tailwind CSS</Checkbox>
                <Checkbox id="next">Next.js</Checkbox>
                <Checkbox id="node">Node.js</Checkbox>
                <Checkbox id="firebase">Firebase</Checkbox>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button>
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
