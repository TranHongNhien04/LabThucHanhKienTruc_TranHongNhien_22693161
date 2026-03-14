package org.example;

import logistics.Logistics;
import logistics.RoadLogistics;
import logistics.SeaLogistics;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        Logistics logistics;

        String type = "road";

        if (type.equals("road")){
            logistics = new RoadLogistics();
        }else{
            logistics = new SeaLogistics();
        }

        logistics.planDelivery();
    }
}