import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StripeBuyButton } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY"); // 替换成你的 Stripe Publishable Key

const CoursePage = () => {
  return (
    <div>
      <h1>课程页面</h1>

      <Elements stripe={stripePromise}>
        <StripeBuyButton
          buyButtonId="buy_btn_1OjCnoEmgDIszJrI1w8Hs6zU"
          // 其他 Buy Button 配置属性
        />
      </Elements>
    </div>
  );
};

export default CoursePage;
