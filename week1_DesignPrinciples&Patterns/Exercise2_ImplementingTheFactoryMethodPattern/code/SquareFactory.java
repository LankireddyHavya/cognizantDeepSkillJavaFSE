package factory;

public class SquareFactory extends ShapeFactory{

	@Override
	public Shape createshape() {
		// TODO Auto-generated method stub
		return new Square();
	}

}
