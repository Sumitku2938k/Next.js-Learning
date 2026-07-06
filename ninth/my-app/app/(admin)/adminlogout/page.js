import React from 'react';

const page = () => {
  return (
    <div>
      Admin Logout Page
    </div>
  );
}

export default page;

//Dynamic Metadata
export async function generateMetadata(params) {
  console.log(params);
  return {
    title: `Logout Admin: Facebook - Connect with friends and the world around you on Facebook.`,
  };
}