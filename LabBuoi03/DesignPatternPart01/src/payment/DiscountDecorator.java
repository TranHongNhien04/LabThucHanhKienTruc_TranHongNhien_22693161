package payment;

public class DiscountDecorator extends PaymentDecorator {
    public DiscountDecorator(Payment payment) {
        super(payment);
    }
    @Override
    public double pay(double amount) {
        double currentTotal = wrappedPayment.pay(amount);
        return currentTotal - (currentTotal * 0.10);
    }
    @Override
    public String getDescription() {
        return wrappedPayment.getDescription() + " + Discount (10%)";
    }
}
