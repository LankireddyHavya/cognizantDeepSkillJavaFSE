package factory;

public class CircleFactory extends ShapeFactory{

	@Override
	public Shape createshape() {
		return new Circle();
	}
	
}
