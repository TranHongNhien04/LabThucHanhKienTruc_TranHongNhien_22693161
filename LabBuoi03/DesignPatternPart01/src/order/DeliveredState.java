package order;

public class DeliveredState implements OrderState {
    @Override
    public void handleOrder(Order order) {
        System.out.println("Order is DELIVERED. Process complete.");
    }
}
