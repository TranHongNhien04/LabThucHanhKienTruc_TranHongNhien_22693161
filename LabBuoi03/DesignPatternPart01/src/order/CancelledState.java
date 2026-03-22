package order;

public class CancelledState implements OrderState {
    @Override
    public void handleOrder(Order order) {
        System.out.println("Order is CANCELLED. Initiating refund.");
    }
}
