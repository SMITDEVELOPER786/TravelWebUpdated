import React from "react";

const RewardsTickets = () => {
  return (
    <div className="">
      {" "}
      {/* Padding */}
      <img
        src="https://www.static-src.com/siva/asset/09_2023/homepage_fb_rebranding.jpg"
        alt="..."
        className="w-full md:h-[500px] h-[350px] object-cover md:block hidden "
      />
      <img
        src="https://cdn6.aptoide.com/imgs/e/b/1/eb15fd5e74fdde67acd9e8f4b30eb4d7_icon.png"
        alt="..."
        className="w-full md:h-[500px] h-[350px] object-cover md:hidden block "
      />
      <div className="px-5 py-5">
        <h1 className="text-3xl font-bold font-quicksand">
          Blibli Rewards Tickets
        </h1>{" "}
        {/* Page title */}
        <section className="mt-4">
          <h2 className="text-2xl font-semibold font-quicksand">
            What are Blibli Rewards Tickets?
          </h2>
          <p>
            Blibli Rewards Tickets is a program that allows users to earn points
            through various activities. These points can be redeemed for
            different rewards, such as travel tickets, gift cards, or special
            discounts.
          </p>
        </section>
        <section className="mt-4">
          <h2 className="text-2xl font-semibold font-quicksand">
            How to Earn Rewards Tickets?
          </h2>
          <p>You can earn Rewards Tickets through multiple methods:</p>
          <ul className="list-disc list-inside">
            <li>Online purchases that grant points</li>
            <li>Taking advantage of special promotions and offers</li>
            <li>Referring friends to earn extra points</li>
          </ul>
        </section>
        <section className="mt-4">
          <h2 className="text-2xl font-semibold font-quicksand">
            How to Redeem Rewards Tickets?
          </h2>
          <p>
            When you have accumulated enough points, you can redeem them for
            various rewards. The process involves a few steps:
          </p>
          <ol className="list-decimal list-inside">
            <li>Log in to your Rewards account</li>
            <li>Check your points balance</li>
            <li>Select the items or services to redeem</li>
            <li>Complete the redemption process</li>
          </ol>
        </section>
        <section className="mt-4">
          <h2 className="text-2xl font-semibold font-quicksand">Need Help?</h2>
          <p>
            If you need assistance or have questions, you can contact our
            support team. They are always ready to help solve your issues.
          </p>
          <p>Email: support@blibli.com</p>
        </section>
      </div>
    </div>
  );
};

export default RewardsTickets;
