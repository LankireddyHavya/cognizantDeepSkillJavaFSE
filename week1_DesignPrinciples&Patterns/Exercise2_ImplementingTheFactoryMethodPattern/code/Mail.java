package factory;

public class Mail {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ShapeFactory circleFactory=new CircleFactory();
		Shape circle =circleFactory.createshape();
		circle.draw();
		
		ShapeFactory squarefactory=new SquareFactory();
		Shape square=squarefactory.createshape();
		square.draw();

	}

}
