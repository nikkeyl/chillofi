import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

type Properties = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  PropsWithChildren;

export type { Properties };
