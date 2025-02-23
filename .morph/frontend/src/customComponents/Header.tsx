import React from "react";
import "../customComponentsStyle/Header.css";
import { Link } from "@inertiajs/react";

export const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link href="/" key="search">
            <svg
              className="w-[48px] h-[48px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/quiz" key="quiz">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" key="dashboard">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/bookmark" key="bookmark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path
                d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
