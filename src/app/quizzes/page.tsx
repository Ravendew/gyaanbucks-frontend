import { Suspense } from 'react';
import QuizzesClient from './QuizzesClient';

export default function QuizzesPage() {
  return (
    <Suspense fallback={null}>
      <QuizzesClient />
    </Suspense>
  );
}
