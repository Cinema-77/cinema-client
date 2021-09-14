import { Container } from '@/components/Layout/Container';
import { useAuth } from '@/lib/auth';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';

interface AuthProps {}

export const Auth: React.FC<AuthProps> = () => {
  const { user } = useAuth();

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <main className="bg-my-gray">
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap">
            <div className="flex-100 max-w-full md:flex-50 md:max-w-[50%] relative w-full px-4">
              <Layout title="Returning Customer">
                <LoginForm />
              </Layout>
            </div>
            <div className="flex-100 max-w-full md:flex-50 md:max-w-[50%] relative w-full px-4">
              <Layout title="New Customer">
                <RegisterForm />
              </Layout>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
