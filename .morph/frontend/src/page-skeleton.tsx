import React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   Button,
//   DropdownMenuSeparator,
//   Toc,
// } from "@morph-data/components";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
// import { Link } from "@inertiajs/react";
import { Toc as TocEntries } from "@stefanprobst/rehype-extract-toc";
import { Header } from "./customComponents/Header";
import "../src/customComponentsStyle/Header.css";
import { useState } from "react";
function fallbackRender({ error }: FallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

type PageSkeletonProps = React.PropsWithChildren<{
  routes: Array<{ path: string; title: string }>;
  title: string;
  showAdminPage: boolean;
  toc?: TocEntries;
}>;

export const PageSkeleton: React.FC<PageSkeletonProps> = (props) => {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <div>
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-60">
              {props.routes.map((route) => (
                <Link href={route.path} key={route.path}>
                  <DropdownMenuItem>
                    <span className="truncate max-w-full w-full">
                      {route.title}
                    </span>
                  </DropdownMenuItem>
                </Link>
              ))}
              {props.showAdminPage && (
                <>
                  <DropdownMenuSeparator />
                  <Link href="/morph">
                    <DropdownMenuItem>Admin Page</DropdownMenuItem>
                  </Link>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu> */}
        <Header />
        <div className="main-page">{props.children}</div>
      </div>
    </ErrorBoundary>
  );
};
