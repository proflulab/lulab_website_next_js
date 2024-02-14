import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY"); // 替换成你的 Stripe Publishable Key

const CoursePage = () => {
  return (
    <div>
      <h1>课程页面</h1>

      <Elements stripe={stripePromise}>
        {/* 在这里使用 Stripe Checkout 组件 */}
        <CheckoutButton />
      </Elements>
    </div>
  );
};

export default CoursePage;
