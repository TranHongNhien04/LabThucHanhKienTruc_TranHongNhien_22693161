package payment;

public class CreditCardPayment implements Payment {
    @Override
    public double pay(double amount) {
        return amount;
    }
    @Override
    public String getDescription() {
        return "Credit Card";
    }
}
