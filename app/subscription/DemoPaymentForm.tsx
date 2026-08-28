"use client";

type DemoPaymentFormProps = {
  action: (formData: FormData) => void | Promise<void>;
};

const providers = ["PhonePe", "Google Pay", "Paytm", "UPI", "Other UPI"];

export default function DemoPaymentForm({ action }: DemoPaymentFormProps) {

  return (
    <form action={action} className="demo-payment">
      <label>
        Billing cycle
        <select name="cycle">
          <option value="MONTHLY">Monthly - $9.99</option>
          <option value="YEARLY">Yearly - $99.99</option>
        </select>
      </label>
      <label>
        Demo payment method
        <select name="provider">
          {providers.map((method) => <option key={method}>{method}</option>)}
        </select>
      </label>
      <button className="btn primary" type="submit">Pay demo &amp; activate Pro</button>
    </form>
  );
}