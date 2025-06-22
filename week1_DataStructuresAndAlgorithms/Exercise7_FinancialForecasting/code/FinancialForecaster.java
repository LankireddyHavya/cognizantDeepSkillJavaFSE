package recursion;

public class FinancialForecaster {

    public static double futureValue(double amount, double rate, int years) {
        if (years == 0) {
            return amount;
        }
        return futureValue(amount, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double initialAmount = 1000;   
        double growthRate = 0.05;      
        int years = 5;                 

        double result = futureValue(initialAmount, growthRate, years);
        System.out.println("Future Value after " + years + " years: " + result);
    }
}
