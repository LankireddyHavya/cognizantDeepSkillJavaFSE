package cognizant;

import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "T-shirt", "Clothing"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Book", "Education")
        };

        Product result1 = Search.linearSearch(products, "Phone");
        System.out.println("Linear Search Result: " + result1);

        Arrays.sort(products, Comparator.comparing(p -> p.productName));
        Product result2 = Search.binarySearch(products, "Phone");
        System.out.println("Binary Search Result: " + result2);
    }
}
