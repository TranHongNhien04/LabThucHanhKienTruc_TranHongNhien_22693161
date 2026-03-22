package order;

public class ProcessingState implements OrderState {
    @Override
    public void handleOrder(Order order) {
        System.out.println("Order is PROCESSING. Packing and shipping...");
        order.setState(new DeliveredState());
    }
}