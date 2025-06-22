package singleton;

public class Main {

	public static void main(String[] args) {		
		
		Logger logger1= Logger.getInstance();
		Logger logger2=Logger.getInstance();
		
		logger1.log("first message");
		logger2.log("second message");
		
		if(logger1==logger2) {
			System.out.println("Both instances are same. Singleton works");
		}
		else {
			System.out.println("Different messages. Singleton fail");
		}
	}

}
