package tests;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown completed");
    }

    @Test
    public void testAddition() {
        int a = 4;
        int b = 6;

        int result = calculator.add(a, b);

        assertEquals(10, result);
    }

    @Test
    public void testMultiplication() {
        int a = 3;
        int b = 5;

        int result = calculator.multiply(a, b);

        assertEquals(15, result);
    }
}

