import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';

interface AuthProps {}

export const Auth: React.FC<AuthProps> = () => {
  const router = useHistory();
  return (
    <main className="bg-my-gray">
      <section className="py-24">
        <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] 2lg:max-w-[1140px]">
          <div className="flex flex-wrap">
            <div className="flex-100 max-w-full md:flex-50 md:max-w-[50%] relative w-full px-4">
              <Layout title="Returning Customer">
                <LoginForm onSuccess={() => router.push('/')} />
              </Layout>
            </div>
            <div className="flex-100 max-w-full md:flex-50 md:max-w-[50%] relative w-full px-4">
              <Layout title="New Customer">
                <RegisterForm onSuccess={() => router.push('/')} />
              </Layout>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
