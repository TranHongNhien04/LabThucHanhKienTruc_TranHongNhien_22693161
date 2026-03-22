package order;

public class NewState implements OrderState {
    @Override
    public void handleOrder(Order order) {
        System.out.println("Order is in NEW state. Checking info...");
        order.setState(new ProcessingState());
    }
}