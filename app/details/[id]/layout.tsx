import { Metadata } from 'next';
import { ReactNode } from 'react';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  return {
    title: `Country | ${id}`, 
    description: `Details about the country with name ${id}.`,
  };
}

export default function DetailsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
