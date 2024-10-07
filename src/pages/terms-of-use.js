import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Usersform, Header, Countdown, Footer } from "@/components";
import Head from "next/head";
import { Button } from '@shopify/polaris';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function TermsOfUse() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <Head>
        <title>Terms of Use</title>
      </Head>
      <main>
        <div className="logo-container flex py-4 justify-center bg-slate-50">
          <Link href={'/'}>
            <svg
              width={218}
              height={44}
              viewBox="0 0 218 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your logo SVG code here */}
            </svg>
          </Link>
        </div>

        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mt-8">Terms of Use</h1>
          <p className="mt-4">
            Welcome to our website. By accessing or using our service, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
          <p>
            By using our services, you confirm that you accept these Terms of Use and that you agree to comply with them.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Changes to the Terms</h2>
          <p>
            We may revise these Terms of Use at any time by updating this page. Your continued use of the service after changes are posted will signify your acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold mt-6">3. User Responsibilities</h2>
          <p>
            You agree to use our service for lawful purposes and in a way that does not infringe on the rights of others. 
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Account Security</h2>
          <p>
            If you create an account, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at [Your Contact Information].
          </p>

          <div className="flex justify-center mt-8">
            <Button primary>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
