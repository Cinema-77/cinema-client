import { Container } from '@/components/Layout';
import React from 'react';
import { Button } from '..';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <section className="py-28">
      <Container>
        <div className="flex flex-wrap justify-center -ml-px -mr-px">
          <div className="flex-100 max-w-full text-center md:flex-83 md:max-w-[83.33333%] lg:flex-67 lg:max-w-[66.66667%] xl:flex-50 xl:max-w-[50%] ">
            <div className="mb-8 text-6xl">🙁</div>
            <h2 className="mb-7 font-medium text-4xl">404. Page not found.</h2>
            <p className="mb-7 text-[#525252] font-medium text-2xl">
              Sorry, we couldn't find the page you where looking for. We suggest that you return to
              home page.
            </p>
            <Button className="inline-block">Go to Homepage</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
