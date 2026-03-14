package transport;

public class Truck implements Transport{
    @Override
    public void deliver() {
        System.out.println("Delivering goods by Truck (road)");
    }
}
