/// <reference types="vite/client" />

// Ensure JSX namespace is available for TS projects using React 17+ runtime
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // allow any intrinsic element by default
      [elemName: string]: any;
    }
  }
}

export {};
