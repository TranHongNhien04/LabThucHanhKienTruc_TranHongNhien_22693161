package payment;

public class PayPalPayment implements Payment {
    @Override
    public double pay(double amount) {
        return amount;
    }
    @Override
    public String getDescription() {
        return "PayPal";
    }
}
