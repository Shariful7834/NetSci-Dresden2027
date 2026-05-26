import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

/**
 * Prose — readable typography wrapper for long-form content.
 * Styles live in global.css under `.prose-content` (no plugin dependency).
 */
interface Props {
  children: ReactNode;
  className?: string;
}

export default function Prose({ children, className = '' }: Props) {
  return <div className={cn('prose-content', className)}>{children}</div>;
}
