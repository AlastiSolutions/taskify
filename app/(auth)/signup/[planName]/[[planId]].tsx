"use client";

import { useRouter } from "next/router";

const SignUpPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <p>Plan Name: {router.query.planName}</p>
      <p>Plan ID: {router.query.planId}</p>
    </>
  );
};

export default SignUpPage;

export async function getStaticPaths() {}
export async function getStaticProps({ params }) {}
