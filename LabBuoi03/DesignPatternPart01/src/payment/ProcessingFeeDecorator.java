package payment;

public class ProcessingFeeDecorator extends PaymentDecorator {
    public ProcessingFeeDecorator(Payment payment) {
        super(payment);
    }
    @Override
    public double pay(double amount) {
        return wrappedPayment.pay(amount) + 2.50;
    }
    @Override
    public String getDescription() {
        return wrappedPayment.getDescription() + " + Processing Fee";
    }
}
