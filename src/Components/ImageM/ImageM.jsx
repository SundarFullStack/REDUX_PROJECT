import Image from 'react-bootstrap/Image';

function Fluidimage({ImageB =''}) {
  return <Image  id='Bimg'src={ImageB} fluid />;
}

export default Fluidimage;